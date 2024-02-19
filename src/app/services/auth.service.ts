import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';

  
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user: any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user: any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  deleteUser(user: any){
    return this.http.delete<any>(this.URL + '/usuarios/:id', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getData(token: string){
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.get<any>(`${this.URL}/data`, { headers });
  }

}
