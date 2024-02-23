import { Component, OnInit } from '@angular/core';
import { Iproduct } from './shared/const/interface';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  productsArrInfo! : Array<Iproduct>

  constructor(private prodServ : ProductService){}
  ngOnInit(): void {
  this.productsArrInfo = this.prodServ.fetchProducts();
// console.log(this.productsArrInfo)
  }
  title = 'Product';

}
