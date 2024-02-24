import { Component, Input } from '@angular/core';
import { Iproduct, productStatus } from '../../const/interface';
import { ProductService } from '../../services/product.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  constructor(private prodserv : ProductService, private snackbar : SnackbarService){}
  @Input()singleProd! : Iproduct;
 updatedStatus!:productStatus;

  onUpdateStatus(status : string){
    console.log(status)
    // this.updatedStatus=status;
    if(status === productStatus.InProgress){
      // this.updatedStatus = productStatus.InProgress
      this.prodserv.onUpdateStatus(this.singleProd.id,productStatus.InProgress)
    }
    else if(status === productStatus.Dispatch){
      // this.updatedStatus = productStatus.Dispatch
      this.prodserv.onUpdateStatus(this.singleProd.id, productStatus.Dispatch)
    }
    else if(status === productStatus.Deliver){
      // this.updatedStatus = productStatus.Dispatch
      this.prodserv.onUpdateStatus(this.singleProd.id, productStatus.Deliver)
    }
    // // this.prodserv.onUpdateStatus(id,status)
    // this.prodserv.onUpdateStatus(this.singleProd.id,this.updatedStatus)
  }
  
}
