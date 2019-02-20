

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Options } from 'selenium-webdriver/chrome';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  searchOption=[];
  public productsData: Product[];
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

  /*filteredListOptions() {
  let products = this.productsData;
  console.log(this.productsData);
      let filteredPostsList = [];
      for (let product of products) {
          for (let options of this.searchOption) {
              if (options.productName === product.productName) {
                filteredPostsList.push(product);  
              }
          }
      }
      console.log(filteredPostsList);
      return filteredPostsList;
}*/

filteredListOptions() {
  let products = this.productsData;
  let options = this.searchOption;
  console.log(this.productsData); 
     var filteredPostsList= this.productsData.filter(function(product){
       console.log(options);
      for (let option of options) {
       if (product.productName==option.productName){
         return true;
       }
      }return false;
     }); 
      console.log(filteredPostsList);
      return filteredPostsList;
}

 
}



  


