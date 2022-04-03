import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private UserServic: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  //User: any = []
  user = new User(0, "", "", 0, "", "");
  users: User[] = [];
  i: number = 0;
  flag: boolean = false;
  idUser: number = 0;
  gender: string = "";

  onSubmit() {
    //רישום

    this.UserServic.getUsers().subscribe((data: User[]) => {
      if (this.user.name != "" && this.user.email != "" && this.user.password.toString().length >= 8 && this.user.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/) != null) {
        if (this.gender == 'female')
          this.user.image = "https://img.icons8.com/office/80/000000/bolivian-girl.png";
        else
          this.user.image = "https://img.icons8.com/bubbles/100/000000/user.png";
        if (data.length == 0) {
          this.UserServic.addUser(this.user).subscribe((data: User) => {
            alert("user added sucsseflly");
            this.UserServic.setUserConected(data.id)
            this.flag = false;
            this.router.navigateByUrl('/home');
            return;

          });
        }
        for (this.i = 0; this.i < data.length; this.i++) {
          if (data[this.i].email == this.user.email) {
            alert("the user exist");
            this.flag = false;
            return;
          }
          else
            this.flag = true;
        }
        if (this.flag) {
          this.UserServic.addUser(this.user).subscribe((data: User) => {
            alert("user added sucsseflly :)");
            this.UserServic.setUserConected(data.id)
            this.router.navigateByUrl('/home');

          });
        }
      } else {
        alert("miss information");
      }
      this.users = data;



    });
  }


}
