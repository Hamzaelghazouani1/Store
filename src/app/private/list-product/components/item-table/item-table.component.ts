import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataStorageService } from 'src/app/core/data/data-storage.service';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { PopUpComponent } from 'src/app/shared/components/pop-up/pop-up.component';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent {
  constructor(public dialog:MatDialog,private dataStorage:DataStorageService,private productService:ProductService) {}

  @Input() product!:Product;

  openDialogUpdate(id:any): void {
    const dialogRef = this.dialog.open(PopUpComponent);
    this.dataStorage.id =id;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteProductAction(id:any):void{
    this.productService.deleteProduct(id).subscribe({
      next:(data:Product)=>{console.log(data);},
      error:(error)=>{console.log(error);},
      complete:()=>console.log("complite")
    })
  }


}
