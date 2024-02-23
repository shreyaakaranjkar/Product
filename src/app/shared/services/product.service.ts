import { Injectable } from '@angular/core';
import { Iproduct, productStatus } from '../const/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productsArray : Array<Iproduct> =[
    {
      pname : 'Samsung A12',
      pdetails : 'Smart Phone',
      pstatus : productStatus.InProgress,
      id : '123shk'
    },
    {
      pname : 'Iphone A200',
      pdetails : 'Apple Phone',
      pstatus : productStatus.Dispatch,
      id : '345shk'
    }
  ]

  fetchProducts(){
    return this.productsArray
  }
  addProduct(product : Iproduct){
    this.productsArray.push(product)
    console.log(product)
  }
}
