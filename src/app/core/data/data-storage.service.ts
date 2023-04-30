import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  data!:Product[];
  dataProduct:Product|undefined;
  id:any;

}
