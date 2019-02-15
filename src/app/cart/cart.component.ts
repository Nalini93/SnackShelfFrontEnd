import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from '../product/product.service';
import { OrderService } from '../order/order.service';
import {UserService} from '../user/user.service';
import { Product } from '../product/product';
import {Item} from '../cart/item';
import { Order } from '../order/order';
import { User } from '../user/user';
import { log } from 'util';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  prod: any;
  user1:any;
  items: Item[] = [];
  bodyOrder:Order = new Order();
  productItem:Product;
  productsItem:Array<Product>=[];
  mockedUser:User = new User();
  allUsers : Array<User>=[];
  id1: string;
  totalquantity:number=0;
	private total: number = 0;

  constructor(private route: ActivatedRoute, private productService: ProductService, 
	private orderService: OrderService, private userService: UserService, private router:Router) { 
  

  }
  
  ngOnInit() {
	  console.log("ngOnInit CartComponent");
	  //this.id1 = this.userService.userIdFromComponent;
	  this.id1=JSON.parse(localStorage.getItem('loggeduserid'));
	  console.log(this.id1);

	
	this.userService.getUser(this.id1).subscribe(data => {
      
		console.log(data);
		this.user1 = data;
		console.log(this.user1);
	  });
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
			  	/*for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}*/
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

	emptyCart(): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			cart.splice(i);
			
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}

	createOrder(elements){
		console.log(elements.length);
		console.log(elements);
		for(let item of this.items){
			this.totalquantity=((item.quantity)+this.totalquantity);
		}
		console.log(this.totalquantity);
		/*var totalquantity:Item;
		
		for(var element in elements){
			totalquantity=totalquantity+element.quantity;
		}*/
		for (let index = 0; index < elements.length; index++) {
			this.productsItem.push(elements[index].product)	
		}
		this.bodyOrder.products = this.productsItem;
		this.bodyOrder.user=this.user1;
		console.log(this.user1);
		this.bodyOrder.total=this.total;
		console.log(this.bodyOrder);
		
		this.orderService.createOrder(this.bodyOrder).subscribe(result =>{
			console.log(result)
			alert("order was successful")
			this.emptyCart();
			this.router.navigate(['/order-list']);
		},
		error => {
			console.error(error);
			console.log(error.status);
			alert("order is empty")
			this.router.navigate(['/cart']);
		});
		
		
		/*elements.forEach(element => {
			this.productsItem.push(element.product)
		});*/
		
	}

	logout() {
		localStorage.clear();
		this.router.navigate(['/']);
	  }

	
  

}
    


