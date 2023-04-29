import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/core/data/data-storage.service';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private dataStorage:DataStorageService,private router:Router){}

  moreActionButtonClick(){
    this.dataStorage.dataProduct = this.item;
    console.log(this.item);
    this.router.navigateByUrl('/product/'+this.item.id);
  }

  @Input() item!:Product;
}
