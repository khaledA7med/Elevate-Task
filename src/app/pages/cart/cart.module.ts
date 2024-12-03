import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/shared/models/routes/appRoutes';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: AppRoutes.cart,
    component: CartComponent,
  },
];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class CartModule {}
