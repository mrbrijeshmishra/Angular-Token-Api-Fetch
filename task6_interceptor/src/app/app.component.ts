import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Api Fetching';
  users: any;
  constructor(private userData: UserDataService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userData.users().subscribe(data => {
      this.users = data;
    });
  }
}
