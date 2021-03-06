import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../product.service';
import { Product } from '../product';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  //private products: Array<Product> = [];
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router ) {
    this.route.params.subscribe( params => this.product = params.id );

   }

  ngOnInit() {
    console.log("NgOnInit Productdetails");
    
    //this.products = this.productService.getProductList();
    this.productService.getProduct(this.product).subscribe(data => {
      
      console.log(data);
      this.product = data;
      console.log(this.product);
    })
    console.log(this.product);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  controlAdd(product: any){
    console.log(product.quantity)
    if(product.quantity<=0){
      alert("Product is out of stock")
    }else
    this.router.navigate(['/cart', { id:product.id }]);
  }
  /*addProduct(element : Product ){
    console.log(element.companyName);
    //this.products.push(element);
    console.log("Array of products");
    //console.log(this.product);
    this.productService.createProduct(element).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.product);
   
  }*/
  //aggiunge il prodotto e la quantita ordinata al carrello della spesa

  //<a [routerLink]="['/cart', { id:product.id }]">

}





