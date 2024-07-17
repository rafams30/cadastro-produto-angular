import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Category } from '../../interfaces/Category';
import { NgFor } from '@angular/common';
import { Product } from '../../interfaces/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, NgFor, FormsModule],
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

  product : Product = {} as Product;

  constructor() { }

  ngOnInit(): void {
    
  }

}
