import { Component, OnInit } from '@angular/core';
import { User, UserService, AccessUser } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  constructor(private UserServic: UserService) {}
  userInfo = new User(0, '', '', 0, '', ' ', 0, 0);
  accessUser: string = '';

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.UserServic.getUserById().subscribe({
      next: (v) => {
        this.userInfo = v.data;
        if (v.data.access == AccessUser.user) this.accessUser = 'Customer';
        else if (v.data.access == AccessUser.supplier)
          this.accessUser = 'Supplier';
        else this.accessUser = 'Manager';
      },
      error: (e) => console.log(e),
    });
  }
}
