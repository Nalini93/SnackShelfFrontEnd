import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
//import { ProductModule } from './product/product.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
@NgModule({
declarations: [
AppComponent,
ProductListComponent,
ProductDetailsComponent

],
imports: [
BrowserModule,
FormsModule,
AppRoutingModule,
HttpClientModule,

//ProductModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }