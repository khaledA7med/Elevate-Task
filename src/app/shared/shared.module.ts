import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgSelectModule,
    NgxSpinnerModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NgSelectModule,
    NgxSpinnerModule,
    FormsModule,
  ],
})
export class SharedModule {}
