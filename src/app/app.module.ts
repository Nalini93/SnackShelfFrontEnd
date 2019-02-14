import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AlertComponent } from './alert/alert.component';
import {AlertService} from './alert/alert.service';
import {UserService} from './user/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderService } from './order/order.service';

@NgModule({
declarations: [
AppComponent,
ProductListComponent,
ProductDetailsComponent,
UserComponent,
CartComponent,
OrderComponent,
AlertComponent,
LoginComponent,
RegisterComponent,
UserListComponent,
OrderListComponent,



],
imports: [
BrowserModule,
FormsModule,
ReactiveFormsModule,
AppRoutingModule,
HttpClientModule,



],
providers: [
    AlertService,
    UserService,
    OrderService
    
   
],
bootstrap: [AppComponent]
})
export class AppModule { }

