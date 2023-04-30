import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<PopUpComponent>,private formBuilder:FormBuilder) {}

  ngOnInit(): void {
   this.formProduct = this.formBuilder.group({
    id:[''],
    name:[''],
    price:[''],
    rating:[''],
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
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.formProduct.value);

  }

  formProduct:FormGroup|any;
  data = "";
}
