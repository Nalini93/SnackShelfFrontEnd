import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {User} from '../user/user';
import { RouterModule, Routes, Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;
  userLogged: User = new User ();
  userIdLogged:string;
  //public checkUser : boolean = true;
  //loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private route : Router) { }

  ngOnInit() {
   this.user= new User(); 
   this.userLogged = new User();
  }
  //get form(){
  //  return this.loginForm.controls;
  //}
  checkLogin({value}:{value: User} ) {
    this.user = value;
  console.log(value);
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
      console.error(error);
      console.log(error.status);
      alert("Error: user not found");
      this.route.navigate(['/']);
    });

		console.log(this.user);
  }
  }

 