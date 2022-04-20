import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User, AccessUser } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private UserServic: UserService, private router: Router) {}

  ngOnInit(): void {}
  user = new User(0, '', '', 0, '', '', 0, 0);
  phoneNumber: String = '055';
  getPhone(e: any) {
    console.log('is here');
    this.phoneNumber = e.target.value;
  }

  onSubmit(SingUp: any) {
    console.log(SingUp.value.phone.length);
    if (SingUp.value.phone.match(/[0-9]/) != null) {
      this.phoneNumber += SingUp.value.phone;
      SingUp.value.phone = this.phoneNumber;
    } else alert('you enter letters in phone input');

    //רישום

    this.user = SingUp.value;
    if (this.user.image == 'female') {
      this.user.image =
        'https://img.icons8.com/office/80/000000/bolivian-girl.png';
    } else {
      this.user.image = 'https://img.icons8.com/bubbles/100/000000/user.png';
    }
    this.user.access = AccessUser.user;
    this.user.loginAttempts = 0;
    console.log(this.user.phone);
    console.log(this.user.phone.match(/[0-9]/));
    if (
      this.user.phone.length == 10 &&
      this.user.name.match(/[0-9]/) == null &&
      this.user.name.length >= 2 &&
      this.user.password.toString().length >= 7
    ) {
      this.UserServic.addUser(this.user).subscribe({
        next: (v) => {
          alert('user add successfully ');
          this.router.navigateByUrl('/home');
        },
        error: (e) => {
          if (e.status == 500) alert('Not an email ');
          else alert('email already exists ');
        },
      });
      this.UserServic.getUsers().subscribe({
        next: (v) => console.log(v),
        error: (e) => console.log(e),
      });
    } else {
      this.phoneNumber = this.phoneNumber.substring(0, 3);
      alert('invalid  deatils ');
    }
  }
}
