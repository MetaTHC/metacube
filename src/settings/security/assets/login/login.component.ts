import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm!: NgForm;
  loginForm!: FormGroup;
  showAlert: boolean = false;
  signInForm: any;
  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['my_username', Validators.required],
      email: ['my_email@my_email.com', [Validators.required, Validators.email]],
      password: ['my_password', Validators.required],
      rememberMe: ['']
    });
  }

  signIn(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginForm.disable();
    this.showAlert = false;
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        const redirectUrl = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl') || '/profile';
        this.router.navigateByUrl(redirectUrl).then( );
      }
    )
  }
}
