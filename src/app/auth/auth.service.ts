import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, Subject } from "rxjs";
import { AuthUser } from "./auth-user.model";

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
  authUser = new Subject<AuthUser>();

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfS7RD82PERmMZtDX2Iwhtwuov4v0SWOo",
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
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfS7RD82PERmMZtDX2Iwhtwuov4v0SWOo",
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

  private handleAuthentication(
    email: string,
    userId: string,
    token,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const authUser = new AuthUser(email, userId, token, expirationDate);
    this.authUser.next(authUser);
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