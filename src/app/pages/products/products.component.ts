import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { products } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  category: string = 'All Categories';
  categories: any[] = [];
  products: products[] = [];

  constructor(
    private productsService: ProductsService,
    private spinner: NgxSpinnerService,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();

    const category = this.shared.getFilterData();
    if (category) {
      this.category = category;
      this.filter(category);
    }
  }

  getCategories() {
    this.productsService.getAllCategories().subscribe({
      next: (res) => (this.categories = ['All Categories', ...res]),
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while loading categories!',
        });
      },
    });
  }

  getProducts() {
    this.spinner.show();
    this.productsService.getAllProducts().subscribe({
      next: (res) => {
        if (res) {
          this.products = res;
          this.spinner.hide();
        }
      },
      error: (err) => {
        this.spinner.hide();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while loading products!',
        });
      },
    });
  }

  filter(e: any) {
    this.spinner.show();
    this.category = e;
    if (e === 'All Categories') {
      this.getProducts();
    } else {
      this.productsService.getProductsByCategory(e).subscribe({
        next: (res) => {
          this.products = res;
          this.spinner.hide();
        },
      });
    }
  }

  addToCart(product: any) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${product.title} added to cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
