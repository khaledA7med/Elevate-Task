import {
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Login, LoginForm } from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginModal!: NgbModalRef;
  @ViewChild('loginContent') loginContent!: TemplateRef<any>;

  LoginForm!: FormGroup<LoginForm>;

  constructor(public modal: NgbActiveModal, private auth: AuthService) {
    this.initForm();
  }

  initForm(): void {
    this.LoginForm = new FormGroup<LoginForm>({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f() {
    return this.LoginForm.controls;
  }

  login() {
    let data: Login = {
      username: this.f.username.value!,
      password: this.f.password.value!,
    };

    this.auth.login(data).subscribe({
      next: (res) => {
        localStorage.setItem('tokoen', res.token);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
