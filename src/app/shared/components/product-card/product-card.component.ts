import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from '../../services/shared.service';
import { products } from '../../models/products';
import Swal from 'sweetalert2';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() products: products[] = [];

  modalRef!: NgbModalRef;

  constructor(
    private productsService: ProductsService,
    private spinner: NgxSpinnerService,
    private shared: SharedService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  addToCart(product: any) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${product.title} added to cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  viewDetails(product: any) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${product.title} details!`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  openProductDetails(id: number) {
    this.modalRef = this.modalService.open(ProductDetailsComponent, {
      size: 'xl',
      centered: true,
      scrollable: true,
    });
    this.modalRef.componentInstance.data = {
      id,
    };
  }
}
