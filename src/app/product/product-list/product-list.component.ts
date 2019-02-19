import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[]; //any
 
  constructor(private productService: ProductService, private route : Router) { }
 
  ngOnInit() {
    console.log("NgOnInit ProductList");
    
   //this.products = this.productService.getProductList();
   this.productService.getProductList().subscribe(data => {
     this.products = data;
     console.log(data);
     this.productService.productsData=data;
     console.log(this.productService.productsData);
     
    });
   //console.log(this.products);
    
  }
  logout() {
    localStorage.clear();
    this.route.navigate(['/']);
  }

  onSelectedOption(e) {
    console.log("in selected filter");
    this.getFilteredExpenseList();
    
    console.log(this.getFilteredExpenseList);
  }

  getFilteredExpenseList() {
    if (this.productService.searchOption.length > 0){
      this.products = this.productService.filteredListOptions();
      console.log(this.products);
      
    }else {
      this.products = this.productService.productsData;
    }

  }
  
 


}


