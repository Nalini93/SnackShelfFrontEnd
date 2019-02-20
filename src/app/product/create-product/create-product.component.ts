import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  private product: Product;
  constructor(private formBuilder: FormBuilder,private route: Router, private productService: ProductService) { }

  ngOnInit() {
    this.product= new Product();
  }

  createProduct({value}:{value: Product} ) {
    this.product = value;
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe(result => {
      console.log(result);
      alert("Creation was succesful")
      this.route.navigate(['/product-list']);
    },  
    error => {
      console.error(error)
      alert("Error: Missing Fields");
      this.route.navigate(['/create-product']);
    });
  }
  }


