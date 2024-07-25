import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Category } from '../../interfaces/Category';
import { NgFor } from '@angular/common';
import { Product } from '../../interfaces/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, NgFor, FormsModule, CommonModule],
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
  products : Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveProduct() {
    this.product.id = this.products.length + 1;
    this.products.push(this.product);
    this.product = {} as Product;

    console.log("Novo produto cadastrado. Total de produtos: " + this.products.length);
  }

}
