/**
 * Created by Hammad on 30/05/2017.
 */
var mysql=require('mysql');
var bluebird=require("bluebird");
var cron=require('node-schedule');
const nodemailer=require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var fs = require('fs');

var connection = mysql.createConnection({


  host     : 'localhost',
  user     : 'guard7',
  password : 'GU4rd7123!',
  database: 'guard7'

  // host     : 'localhost',
  // user     : 'root',
  // password : '',
  // database : 'angular2dashboard'

});

global.db  = bluebird.promisifyAll(connection);


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var transporter=nodemailer.createTransport(smtpTransport({
  host: 'server4.thatsit.co.uk',
  port: 25,
  auth: {
    user: 'guard@shesguard.com',
    pass: 'FUXake123!'
  }
}));



  global.db.connect(function(err) {
    if (err) {
      console.error('error connecting to DB: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);
    cron.scheduleJob({minute: 0}, function(){
      findDevicesWithError("SELECT dev.Serial,dev.Details,dev.CurrentError,sit.Name FROM Devices dev,Sites sit WHERE dev.CurrentError != '0' AND dev.Live LIKE 'yes' AND sit.ID=dev.Details");
      findDevicesWithError("SELECT dev.Serial,dev.Details,dev.CurrentError,sit.Name FROM Devices dev,Sites sit WHERE dev.Live LIKE 'yes' AND dev.LastSeen < DATE_SUB(NOW(),INTERVAL 2 HOUR) AND sit.ID=dev.Details");
    });

  });


  function findDevicesWithError (queryString) {

    global.db.queryAsync(queryString)
      .then(function(rows){

        rows.forEach(function (row) {

          var body='';

          if(row.currentError){
            body="Dear Engineer /n A Device "+row.Serial+" on Site"+row.Name+" has an error which is '"+row.CurrentError+"'";
          }else{
            body="Dear Engineer /n A Device "+row.Serial+" on Site "+row.Name+" has not checked in for at least 1 hour.";
          }
          console.log(body);
          var mailOptions={
            from:'guard@shesguard.com',
            to:'om_engineers@sh-es.co.uk',
            subject:'Solar Panel Report',
            text:body
          };

          transporter.sendMail(mailOptions,function (err,res) {
            if(err){
              fs.writeFile("output.txt", err, function(err) {
                if(err) {
                  return console.log(err);
                }
                console.log("File saved successfully!");
              });
            }else {
              fs.writeFile("emailsentoutput.txt", "Email Sent", function(err) {
                if(err) {
                  return console.log(err);
                }
                console.log("File saved successfully!");
              });
            }
          });
        });
      });
  }
