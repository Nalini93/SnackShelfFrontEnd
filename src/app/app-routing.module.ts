import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent} from './product/product-details/product-details.component';
const routes: Routes = [
  
  { path: '', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

