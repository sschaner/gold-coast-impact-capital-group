import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { AuthResponseData } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  codeAnswer = environment.codeAnswer;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const code = form.value.code;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      if (code === this.codeAnswer) {
        authObs = this.authService.signup(email, password);
      }
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
      },
      (errorMesssage) => {
        console.log(errorMesssage);
        this.error = errorMesssage;
        this.isLoading = false;
      }
    );

    form.reset();
  }

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-other");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-other");
  }
}
