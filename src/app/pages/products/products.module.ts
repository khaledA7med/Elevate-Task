import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/shared/models/routes/appRoutes';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: AppRoutes.products,
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
