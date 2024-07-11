import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Category } from '../../interfaces/Category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  categories : Category [] = [
    {id : 1, name:"Produção Propria" },
    {id : 2, name:"Nacional" },
    {id : 3, name:"Importado" },
    {id : 4, name:"Premium" }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
