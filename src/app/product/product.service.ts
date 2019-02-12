

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/products';
  public httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };
  

  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/`, product);
  }

  updateProduct(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProductList(): Observable<any> {

    return this.http.get(`${this.baseUrl}/`)
 
  }
  findProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`, this.httpOptions) ;
  } 

  
}

/*import { Injectable } from '@angular/core';
import { Product } from "./product";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ProductService {
private apiUrl = '/api/employees';
constructor(private http: HttpClient) {
 }
findAll(): Promise<Array<Product>> {
 return this.http.get(this.apiUrl)
 .toPromise()
 .then(response => response.json() as Product[])
 .catch(this.handleError);
 }
createEmployee(product: Product): Promise<Array<Product>> {
 let empHeaders = new Headers({ 'Content-Type': 'application/json' });
 return this.http.post(this.apiUrl, JSON.stringify(product), { headers: empHeaders })
 .toPromise()
 .then(response => response.json() as Product[])
 .catch(this.handleError);
 }
deleteEmployeeById(id: number): Promise<Array<Product>> {
 const url = `${this.apiUrl}/${id}`;
 return this.http.delete(url)
 .toPromise()
 .then(response => response.json() as Product[])
 .catch(this.handleError);
 }
private handleError(error: any): Promise<Array<any>> {
 console.error('An error occurred', error);
 return Promise.reject(error.message || error);
 }
}*/