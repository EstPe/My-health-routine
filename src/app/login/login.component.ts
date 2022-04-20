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
  user = new User(0, '', '', 0, '', ' ', 0, 0);
  users: User[] = [];
  i: number = 0;
  flag: boolean = false;
  idUser: number = 0;

  constructor(private UserServic: UserService, private router: Router) {}
  ngOnInit(): void {}
  onSubmit(login: any) {
    this.user = login.value;
    this.UserServic.getUserByEmail(this.user).subscribe({
      next: (v) => {
        if (v && v.data.password == this.user.password) {
          this.UserServic.setUserConected(v.data._id);
          this.router.navigateByUrl('/home');
        } else {
          this.user = v.data;
          this.user.id = v.data._id;

          this.user.loginAttempts = v.data.loginAttempts;
          if (this.user.loginAttempts < 4) {
            ++this.user.loginAttempts;
            this.UserServic.updateUser(this.user).subscribe({
              next: (v) => console.log(v),
              error: (e) => console.log(e),
            });
            alert('user does not exist');
          } else {
            alert('your password is blocked');
            this.user.password = login.value.password;
            this.UserServic.updateUser(this.user).subscribe({
              next: (v) => console.log(v),
              error: (e) => console.log(e),
            });
          }
        }
      },

      error: (e) => console.log(e),
    });
    // this.UserServic.getUsers().subscribe((data) => {
    //   console.log('message::::', data);
    // });
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
