import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  User: any = [];
  user = new User(0, '', '', 0, '', ' ');
  users: User[] = [];
  i: number = 0;
  flag: boolean = false;
  idUser: number = 0;

  constructor(private UserServic: UserService, private router: Router) {}
  ngOnInit(): void {}
  onSubmit(login: any) {
    this.UserServic.getUsers().subscribe((data) => {
      console.log('message::::', data);
    });
    //רישום
    // this.UserServic.getUsers().subscribe((data: User[]) => {
    //   for (this.i = 0; this.i < data.length; this.i++) {
    //     if (login.value.Email1 == data[this.i].email && login.value.Password1 == data[this.i].password) {
    //       this.UserServic.setUserConected(data[this.i].id);
    //       this.flag = true;
    //       alert("The password and user is corract");
    //       this.router.navigateByUrl('/home');
    //     } else if (login.value.Email1 == data[this.i].email) {
    //       alert("The password not correct for this user")
    //       this.flag = true;
    //     }
    //   }
    //   if (!this.flag)
    //     alert("The password and user are not exits")
    // });
  }
}
