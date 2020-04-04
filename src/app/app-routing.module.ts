import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { InformationComponent } from "./information/information.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { L1InformationComponent } from "./contact/l1-information/l1-information.component";
import { ContactInformationComponent } from "./contact/contact-information/contact-information.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "information", component: InformationComponent },
  { path: "about", component: AboutComponent },
  {
    path: "contact",
    component: ContactComponent,
    children: [
      { path: "", component: ContactInformationComponent },
      { path: "l1form", component: L1InformationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
