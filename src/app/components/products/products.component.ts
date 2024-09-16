import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Category } from '../../interfaces/Category';
import { NgFor } from '@angular/common';
import { Product } from '../../interfaces/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, NgFor, FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  categories: Category[] = [];

  product: Product = {} as Product;
  products: Product[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();    
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: data => { this.products = data }
    })
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: data => { this.categories = data }
    });
  }

  saveProduct() {
    this.productService.save(this.product).subscribe({
      next: data => {
        this.products.push(data);
        this.product = {} as Product;
      }
    });
    
  }
}
