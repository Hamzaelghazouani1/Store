import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/core/data/data-storage.service';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit,AfterViewChecked {

  constructor(private productService:ProductService,private dataStorege:DataStorageService){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(data:Product[]) =>{
        this.dataStorege.data = data;
        console.log(data);
      },
      error:(err:any) =>{},
      complete:() =>{}
    });
  }

  ngAfterViewChecked(): void {
    this.data = this.dataStorege.data;
  }

  data!:Product[];

}
