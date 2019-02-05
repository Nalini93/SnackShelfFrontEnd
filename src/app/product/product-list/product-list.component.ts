import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
import { ProductService } from '../product.service';
import { Product } from '../product';
 
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products: any;
 
  constructor(private productService: ProductService) { }
 
  ngOnInit() {
    console.log("NgOnInit ProductList");
    
   //this.products = this.productService.getProductList();
   this.productService.getProductList().subscribe(data => {
     console.log(data);
     this.products = data;
   })
   console.log(this.products);
    
  }
 
 /* getList() {
    this.productService.getProductList().subscribe(data => {
      data => {
        this.products$ = data;
      }
});
  
 
 
}*/


}


/*ListProduct() {
  this.productService.getProductList().subscribe()   .deleteCustomer(this.customer.id)
    .subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error));
}*/