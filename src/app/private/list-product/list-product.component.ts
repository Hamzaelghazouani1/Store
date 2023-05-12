import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { PopUpComponent } from 'src/app/shared/components/pop-up/pop-up.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
  constructor(public dialog:MatDialog,private productService:ProductService) {}


  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:data => {this.allProduct = data;console.log(data);},
      error:error=> console.log(error),
      complete:() => console.log("complete")
    })
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(PopUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  allProduct:Product[]|undefined;
}
