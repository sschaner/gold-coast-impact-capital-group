import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { AuthUser } from "./auth-user.model";
import { Router } from "@angular/router";
import { environment } from "src/environments/environments";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  authUser = new BehaviorSubject<AuthUser>(null);
  loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          environment.firebaseWebAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          environment.firebaseWebAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
          this.loggedIn = true;
        })
      );
  }

  isLoggedIn() {
    if (this.loggedIn) {
      return true;
    } else {
      return false;
    }
  }

  autoLogin() {
    const authUserData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem("authUserData"));
    if (!authUserData) {
      return;
    }

    const loadedAuthUser = new AuthUser(
      authUserData.email,
      authUserData.id,
      authUserData._token,
      new Date(authUserData._tokenExpirationDate)
    );

    if (loadedAuthUser.token) {
      this.authUser.next(loadedAuthUser);
    } else {
      console.log("Doesn't work");
      console.log(authUserData);
      console.log(loadedAuthUser);
    }
  }

  logout() {
    this.authUser.next(null);
    this.router.navigate(["/"]);
    this.loggedIn = false;
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const authUser = new AuthUser(email, userId, token, expirationDate);
    this.authUser.next(authUser);
    localStorage.setItem("authUserData", JSON.stringify(authUser));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occured.";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "This email already exists.";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "This email doesn't exist.";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "Your password is incorrect.";
        break;
      case "USER_DISABLED":
        errorMessage = "Your account has been disabled.";
        break;
    }
    return throwError(errorMessage);
  }
}
