import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { NgFor } from '@angular/common';
import { Product } from '../../interfaces/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

 @Input()
  categories : Category [] = [];

  @Input()
  product ?: Product;

  constructor() { }

  ngOnInit(): void {    
  }

  save() {
    console.log(this.product);
  }

}
