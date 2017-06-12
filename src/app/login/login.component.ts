import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from "../Services/UserServices/user.service";

@Component({
  selector: 'login',
  styleUrls: [ './login.style.scss' ],
  templateUrl: './login.template.html',
  host: {
    class: 'login-page app'
  }
})

export class Login {
  constructor(private _user:UserService,private router: Router) {}

  login(user:any){
    console.log(user);
    if(user.name=="Padleys" && user.password=="S3cure123!"){
      this.router.navigate(['app/dashboard']);
    }
    // this._user.loginUser(user)
    //   .subscribe(
    //     user => {
    //       // Emit list event
    //       this.router.navigate(['app/dashboard']);
    //     },
    //     err => {
    //       // Log errors if any
    //       console.log(err);
    //     });
  }

}
