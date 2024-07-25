import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Category } from '../../interfaces/Category';
import { NgFor } from '@angular/common';
import { Product } from '../../interfaces/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, NgFor, FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  categories : Category [] = [];

  product : Product = {} as Product;
  products : Product[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  saveProduct() {
    this.product.id = this.products.length + 1;
    this.products.push(this.product);
    this.product = {} as Product;

    console.log("Novo produto cadastrado. Total de produtos: " + this.products.length);
  }
}
