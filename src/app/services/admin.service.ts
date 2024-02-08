import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient, private router: Router) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/users`);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.URL}/users/${userId}`);
  }

  updateUser(userId: string, userData: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/usersUp/${userId}`, userData);
  }
}
