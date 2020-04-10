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
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
