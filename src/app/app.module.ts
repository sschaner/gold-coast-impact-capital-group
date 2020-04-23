import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InformationComponent } from "./information/information.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { L1InformationComponent } from "./contact/l1-information/l1-information.component";
import { HomeComponent } from "./home/home.component";
import { ContactInformationComponent } from "./contact/contact-information/contact-information.component";
import { UsersComponent } from "./users/users.component";
import { UserService } from "./contact/l1-information/user.service";
import { UserItemComponent } from "./users/user-item/user-item.component";
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { InformationService } from "./information/information.service";
import { InformationItemComponent } from "./information/information-item/information-item.component";
import { SafePipe } from "./information/information-item/safePipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InformationComponent,
    AboutComponent,
    ContactComponent,
    L1InformationComponent,
    ContactInformationComponent,
    UsersComponent,
    UserItemComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    InformationItemComponent,
    SafePipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [UserService, InformationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
