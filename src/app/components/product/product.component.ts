import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { NgFor } from '@angular/common';
import { Product } from '../../interfaces/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

 @Input()
  categories : Category [] = [];

  product : Product = {} as Product;

  constructor() { }

  ngOnInit(): void {    
  }

  save() {
    console.log(this.product);
  }

}
