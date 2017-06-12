/**
 * Created by Hammad on 09/05/2017.
 */
const express=require('express');
const router=express.Router();
var mysql=require('mysql');
var bluebird=require("bluebird");
var dateFormat = require('dateformat');

var connection = mysql.createConnection({

  // host     : 'localhost',
  // user     : 'guard7',
  // password : 'GU4rd7123!',
  // database: 'guard7'

  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'angular2dashboard'
});

global.db  = bluebird.promisifyAll(connection);

global.db.connect(function(err) {
  if (err) {
    console.error('error connecting to DB: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

router.get('/',function (req,res) {
  res.send('api works');
});

router.post('/user',function (req,res) {
  var email = req.body.email;
  var password=req.body.password;

  var queryString = 'SELECT * FROM customers WHERE Name = ?';

  global.db.queryAsync(queryString,[email])
    .then(function(rows){
    res.json(rows);
    });

  // connection.query(queryString, [email,password], function(err, rows, fields) {
  //   if (err) {
  //     throw err;
  //   }
  //   else{
  //     for (var i in rows) {
  //       res.json(rows[i].Name);
  //     }
  //   }
  //
  // });
});

router.get('/dashboard/chart',function (req,res) {

  var queryString = 'SELECT dev.Serial,site.Name,dev.CurrentError FROM Customers cus ,Sites site,Devices dev WHERE cus.Name = ? AND cus.ID=site.Owner AND site.ID=dev.Details';
  customerName="Padleys";

  global.db.queryAsync(queryString,[customerName])
    .then(function (rows) {
      res.json(rows);
    })
    .catch(function(error){
    //do something with the error and handle it
      res.json(error);
    });

  // connection.query(queryString,[customerName],function(err, rows, fields) {
  //   if (err) throw err;
  //   res.json(rows);
  // });
});

router.get('/dashboard/sites',function (req,res) {

  var queryString = 'SELECT site.Name  FROM Customers cus ,Sites site WHERE cus.Name = ? AND cus.ID=site.Owner';
  customerName="Padleys";

  global.db.queryAsync(queryString,[customerName])
    .then(function (rows) {
      res.json(rows);
    })
    .catch(function(error){
      res.json(error);
    });

});


router.post('/dashboard/devices',function (req,res) {

  //var queryString = "SELECT Current_Day_Energy,E_WR FROM DanfossInverterData WHERE SERIAL LIKE ? AND  DATE(TIMESTAMP) = CURDATE() ORDER BY TIMESTAMP ASC";
  //var queryString = "SELECT did.Current_Day_Energy FROM DanfossInverterData did  WHERE did.SERIAL LIKE ? ORDER BY TIMESTAMP ASC LIMIT 20";
  var queryString = "SELECT Current_Day_Energy FROM DanfossInverterData WHERE SERIAL LIKE ? AND TIMESTAMP >= CURDATE() ORDER BY TIMESTAMP ASC";
  global.db.queryAsync(queryString,[req.body.serial])
    .then(function (rows) {
      res.json(rows);
    })
    .catch(function (error) {
      res.json(error);
    });
  // connection.query(queryString,[req.body.serial],function(err, rows, fields) {
  //   if (err) throw err;
  //   res.json(rows);
  // });
});

router.post('/dashboard/device/error',function (req,res) {

  var queryString="SELECT CurrentError FROM Devices WHERE Serial = ?";
  global.db.queryAsync(queryString,[req.body.serial])
    .then(function (rows) {
      res.json(rows)
    })
    .ctach(function (error) {
      res.json(error);
    });
});

router.post('/dashboard/device/energies',function (req,res) {
  var serials=req.body.serials;
  var startDate=dateFormat(req.body.startDate, "yyyy-mm-dd h:MM:ss");
  var endDate=  dateFormat(req.body.endDate, "yyyy-mm-dd h:MM:ss");
  var resultData=[];

  var queryString = "SELECT Current_Day_Energy,TIMESTAMP FROM danfossinverterdata WHERE TIMESTAMP BETWEEN ? AND ? AND SERIAL LIKE ? ORDER BY TIMESTAMP ASC";


  var promises=serials.map(function (serial) {
    return global.db.queryAsync(queryString,[startDate,endDate,serial])
        .then(function (rows) {

          var row=[];
          seriesIndex=0;
          rows.forEach(function(r){

            var tmp=new Date(r.TIMESTAMP);
            tmp=tmp.getTime();
            row.push({
              x:tmp,
              y:r.Current_Day_Energy
            });

            seriesIndex++;
          });
          resultData.push({
            area:true,
            key:serial,
            values:row
          });
        })
  });

  bluebird.all(promises)
    .then(function() {
      res.json(resultData);
    })
    .error(console.error);

});

function calculateXvalues(pointCount,startDate) {

  var now = new Date(startDate),
    day = 1000 * 60 * 60 * 24, // milliseconds
    daysAgoCount = 60,
    daysAgo = daysAgoCount * day,
    daysAgoDate = now - daysAgo,
    pointsCount = pointCount || 45, // less for better performance
    daysPerPoint = daysAgoCount / pointsCount;

  return daysAgoDate + now * day * daysPerPoint;

}

module.exports=router;
