import { Component, Input } from '@angular/core';
import { Iproduct } from '../../const/interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input()singleProd! : Iproduct
}
