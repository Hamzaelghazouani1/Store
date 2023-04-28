import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {

  data:Product[] = [
    {
      "id":1,
      "name":"string",
      "price":10,
      "description":"string",
      "image":"string",
      "rating":3.2,
    }
  ];

}
