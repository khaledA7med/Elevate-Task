import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: any[] = [];
  constructor(
    private shared: SharedService,
    private router: Router,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {}

  getCategories() {
    this.productsService.getAllCategories().subscribe({
      next: (res) => (this.categories = res),
    });
  }

  onFilter(category: string) {
    // Store the filter data in the service
    this.shared.setFilterData(category);
    // Navigate to the stock page
    this.router.navigate(['/products']);
  }
}
