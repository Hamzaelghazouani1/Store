import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/core/data/data-storage.service';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.css']
})
export class HeaderPublicComponent {
  constructor(
    private productService:ProductService,
    private dataStorege:DataStorageService,
    private router:Router){}

  searchAction():void{
    this.productService.getProductByFilterName(this.searchValue).subscribe({
      next:(data:Product[]) =>{
        this.dataStorege.data = data;
        this.router.navigateByUrl('/product');
      },
      error:(err:any) =>{},
      complete:() =>{}
    });
  }

  navigateAction(direction:string):void{
    this.searchValue = "";
    direction != '/' ? this.searchAction() : this.router.navigateByUrl("/");
  }

  searchValue:string ="";

}
