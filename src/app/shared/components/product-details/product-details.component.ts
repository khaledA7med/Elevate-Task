import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailsComponent implements OnInit {
  @Input() data!: {
    id: number;
  };

  product: any;

  constructor(
    private produuctsService: ProductsService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.produuctsService.getProductDetails(this.data.id).subscribe({
      next: (res) => {
        this.product = res;
        console.log(this.product);
      },
    });
  }
}
