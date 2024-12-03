import {
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from 'src/app/core/auth/auth/auth.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  isNavbarCollapsed = false;
  isUser: boolean = false;
  loginModal!: NgbModalRef;
  @ViewChild('loginContent') loginContent!: TemplateRef<any>;

  constructor(private modalService: NgbModal, private auth: AuthService) {}

  toggleCollapse(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  openVerticallyCentered() {
    this.loginModal = this.modalService.open(AuthComponent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      backdrop: 'static',
      size: 'md',
    });
  }
}
