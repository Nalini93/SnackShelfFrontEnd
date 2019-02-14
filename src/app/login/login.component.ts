import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {User} from '../user/user';
import { RouterModule, Routes, Router } from '@angular/router';
import { sha256 } from 'js-sha256';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;
  userLogged: User = new User ();
  userIdLogged:string;

 
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private route : Router) { }

  ngOnInit() {
   this.user= new User(); 
   this.userLogged = new User();
  }
  
  checkLogin({value}:{value: User} ) {
    if(!(value.password=="")){
    console.log(value.password);
    value.password=sha256(value.password);
    console.log(value.password);
    this.user.password=value.password;
    this.user = value;
    console.log(this.user);
    this.userService.login(this.user).subscribe(result => {
      console.log(result);
      this.userLogged = result;
      console.log(this.userLogged);
      this.userIdLogged = this.userLogged._id;
      console.log(this.userIdLogged);
      //this.userService.userIdFromComponent = this.userIdLogged;
      localStorage.setItem('loggeduserid',JSON.stringify(this.userIdLogged));
      alert("Login was successful");
      //this.checkUser = true;
      this.route.navigate(['/product-list']);

    },
    error => {
      if (error.status==404){
        alert("Error: username not found");
      }else {
        alert("Incorrect Password");
      }
      console.error(error);
      console.log(error.status);
      //alert("Error: user not found");
      this.route.navigate(['/']);
    });
  }else{
    alert("Missing Field");
    console.log(this.user);
  }
  }
  
  }

 