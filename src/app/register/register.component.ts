import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import {UserService} from '../user/user.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: User;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.user= new User();
  }

  createUser({value}:{value: User} ) {
    this.user = value;
    this.userService.register(this.user).subscribe(result => {
      console.log(result);
      alert("Registration was successful")
      this.route.navigate(['/']);
    },
    error => {
      console.error(error)
      alert("Error: Missing Fields");
      this.route.navigate(['/register']);
    });

		console.log(this.user);
  }
}
