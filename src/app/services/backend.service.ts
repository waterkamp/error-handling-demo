import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://gorest.co.in/public/v2/users');
  }

  public getUsersFailing(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://gorest.co.in/public/v2/users-let-it-fail');
  }
}
