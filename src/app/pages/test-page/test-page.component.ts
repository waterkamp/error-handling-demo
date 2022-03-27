import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {

  users?: User[];

  constructor(
    private backendService: BackendService) {

  }

  getUsers(): void {
    this.backendService.getUsers().subscribe({
      next: (users) => this.users = users,
    });
  }

  getUsersFailing(): void {
    this.backendService.getUsersFailing().subscribe({
      next: (users) => this.users = users,
    });
  }


  throwClientError(): void {
    throw new Error('I\'m a client error!');
  }
}
