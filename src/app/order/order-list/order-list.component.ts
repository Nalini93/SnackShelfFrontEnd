import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import { UserService } from 'src/app/user/user.service';
import {Order} from '../order';
import {User} from 'src/app/user/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders:Order[];
  idLogged:string;
  user: User;
  constructor(private orderService: OrderService, private userService: UserService, private route: Router) { }

  ngOnInit() {
    console.log("NgOnInit UserList");
    this.idLogged=JSON.parse(localStorage.getItem('loggeduserid'));
    console.log(this.idLogged);
    
    this.orderService.getOrderListByUser(this.idLogged).subscribe(data1 => {
      console.log(data1);
      this.orders= data1;
      console.log(this.orders);

    });
  
  }
  logout() {
    localStorage.clear();
    this.route.navigate(['/']);
  }

}
