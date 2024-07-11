import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

 @Input()
  categories : Category [] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
}
