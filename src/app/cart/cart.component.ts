import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import {Item} from '../cart/item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  prod: any;
  items: Item[] = [];
	private total: number = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService) { 
  //  this.route.params.subscribe( params => this.id = params['id'] );
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
			var id = params['id'];
			if (id) {
        this.productService.getProduct(id).subscribe(result =>{
					this.prod= result;
					console.log(this.prod)
       // this.prod = new Product(this.prod.id,'prova','prova','prova','','',3);
				var item: Item = {
					product: this.prod,
					quantity: 1
        };
        //if (localStorage.getItem('cart') == null)
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
			  	for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
        this.loadCart();
      });
			} else {
				this.loadCart();
      }
     
		});
		
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}


}
    


