import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataStorageService } from 'src/app/core/data/data-storage.service';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit,OnDestroy{
  constructor(public dialogRef: MatDialogRef<PopUpComponent>,
    private formBuilder:FormBuilder,
    private dataStorage:DataStorageService,
    private productService:ProductService) {}

  ngOnInit(): void {
   this.formProduct = this.formBuilder.group({
    id:[''],
    name:[''],
    price:[''],
    rating:[''],
    qte:[''],
    img:this.formBuilder.group({
      base_img:[''],
      img:[''],
    }),
    desc:[''],
    about:this.formBuilder.array(["","","",""]),
    color:this.formBuilder.array(["#eeeeee"]),
    detail:this.formBuilder.array([
      {description:"",value:""},
      {description:"",value:""},
      {description:"",value:""},
      {description:"",value:""},
      {description:"",value:""},
      {description:"",value:""},
      {description:"",value:""}
    ])
  });
  if (this.dataStorage.id) {
    this.dataStorage.dataProduct!=undefined
    ?   this.formProduct.patchValue(this.dataStorage.dataProduct)
    : this.productService.getProductById(this.dataStorage.id).subscribe((data:Product) => this.formProduct.patchValue(data))

  }

  }



  onSubmitAction(): void {
    if (this.dataStorage.id) this.productService.updateProduct(this.dataStorage.id,this.formProduct.value).subscribe({
      next: data => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log("complete")
    });
    else this.productService.createProduct(this.formProduct.value).subscribe({
      next: data => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log("complete")
    });
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    this.dataStorage.id = null;
    this.dataStorage.dataProduct = undefined;
  }

  formProduct:FormGroup|any;
  data = "";


}
