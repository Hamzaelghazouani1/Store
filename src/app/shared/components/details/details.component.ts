import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/core/data/data-storage.service';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(private dataStorage:DataStorageService,
    private productService:ProductService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataStorage.dataProduct!=undefined
    ? this.product = this.dataStorage.dataProduct
    : this.productService.getProductById(id).subscribe((data:Product) => this.product = data)
    }
  }

  product!:Product;
  isToggle:number = 0;
}
