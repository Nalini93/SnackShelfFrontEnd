import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product'; 

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    myControl = new FormControl();
    filteredOptions: Observable<string[]>;
    allProducts: Product[];
    autoCompleteList: any[];

    @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
    @Output() onSelectedOption: EventEmitter<any> = new EventEmitter();
  
    constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(products => {
      this.allProducts=products;
      console.log(this.allProducts);
    });
    console.log(this.allProducts);
    // when user types something in input, the value changes will come through this
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
  })
  }

  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
}
// this is where filtering the data happens according to you typed value
filterCategoryList(val) {
  var categoryList = []
  if (typeof val != "string") {
      return [];
  }
  if (val === '' || val === null) {
      return [];
  }
  return val ? this.allProducts.filter(s => s.productName.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allProducts;
}
// after you clicked an autosuggest option, this function will show the field you want to show in input
displayFn(product: Product) {
  let k = product ? product.productName : product;
  return k;
}
//function will run and the option inserted in input will be pushed in an searchOption array
filterPostList(event) {
  var products = event.source.value;
  console.log(products);
  if (!products) {
      this.productService.searchOption = []
  }
  else {

      this.productService.searchOption.push(products);
      this.onSelectedOption.emit(this.productService.searchOption);
      console.log(this.productService.searchOption);
  }
  this.focusOnPlaceInput();
}
removeOption(option) {

  let index = this.productService.searchOption.indexOf(option);
  if (index >= 0)
      this.productService.searchOption.splice(index, 1);
  this.focusOnPlaceInput();

  this.onSelectedOption.emit(this.productService.searchOption);
}
focusOnPlaceInput() {
  this.autocompleteInput.nativeElement.focus();
  this.autocompleteInput.nativeElement.value = '';
}

}
