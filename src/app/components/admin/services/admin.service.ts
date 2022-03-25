import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getPersonalList() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5')
  }

  getPerson(id: number) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  constructor(private http: HttpClient) { }
}
