import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';
  userIdFromComponent : string;

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/`, user);
  }

  updateUser(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsertList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`)
    
    
  }
  register(user: Object):Observable<Object> {
    return this.http.post(`${this.baseUrl}/register/`, user);
}
  login(user:Object):Observable<Object>{

    return this.http.post(`${this.baseUrl}/login/`, user);
  }
  
}
