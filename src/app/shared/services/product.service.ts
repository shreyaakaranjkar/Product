import { Injectable } from '@angular/core';
import { Iproduct, productStatus } from '../const/interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackbar : SnackbarService) { }

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

  onUpdateStatus(id : string, status:productStatus){
    console.log(id,status)
    this.productsArray.find(obj => {
      if(obj.id === id){
        obj.pstatus = status
      }
    })
  }
}
