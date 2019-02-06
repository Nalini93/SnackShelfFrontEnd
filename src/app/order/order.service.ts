import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  getOrder(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/`, order);
  }

  updateOrder(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteOrder(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getOrderList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`)
 
  }
  

  
}