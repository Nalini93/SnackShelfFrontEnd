import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent} from './product/product-details/product-details.component';
import { CartComponent} from './cart/cart.component';
import {OrderComponent} from './order/order.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {OrderListComponent} from './order/order-list/order-list.component'
import {CreateProductComponent} from './product/create-product/create-product.component'
const routes: Routes = [

{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'product-list', component: ProductListComponent },
{ path: 'product-details/:id', component: ProductDetailsComponent },
{ path: 'cart', component: CartComponent },
{ path: 'order', component: OrderComponent },
{ path: 'user-list', component: UserListComponent},
{path: 'order-list', component: OrderListComponent},
{path: 'create-product', component: CreateProductComponent},
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

