import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { TermsAndConditionsComponent } from "./terms-and-conditions/terms-and-conditions.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "terms-and-conditions",
    component: TermsAndConditionsComponent,
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
