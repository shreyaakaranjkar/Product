import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { UuidService } from '../../services/uuid.service';
import { productStatus } from '../../const/interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit{

  productForm! : FormGroup;
  constructor(private prodServ : ProductService, private uid : UuidService){}

  ngOnInit(): void {
    this.createProductForm()
  }

  createProductForm(){
    this.productForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      pstatus : new FormControl(null,[Validators.required])
    })
  }

  onSubmit(){
    // console.log(this.productForm.value)
    let prodObj = {...this.productForm.value, id : this.uid.uuid(),
    prodStatus : productStatus.InProgress}
    console.log(prodObj)
      this.prodServ.addProduct(prodObj)
  }
}
