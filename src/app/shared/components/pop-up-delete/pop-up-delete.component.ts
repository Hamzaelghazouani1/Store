import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/core/data/data-storage.service';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-pop-up-delete',
  templateUrl: './pop-up-delete.component.html',
  styleUrls: ['./pop-up-delete.component.css']
})
export class PopUpDeleteComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<PopUpDeleteComponent>,
    private dataStorage:DataStorageService,
    private productService:ProductService,private route:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onCancelAction(): void {
    this.dialogRef.close();
  }

  onDeleteAction(): void {
    this.productService.deleteProduct(this.dialogRef.id).subscribe({
      next:(data:Product)=>{console.log(data);},
      error:(error)=>{console.log(error);},
      complete:()=>console.log("complite")
    });
    this.route.navigateByUrl('/admin/product');
    this.dialogRef.close();
  }


}

