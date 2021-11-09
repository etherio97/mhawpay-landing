import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { TranslocoRootModule } from "./transloco.module";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { TermsAndConditionsComponent } from "./terms-and-conditions/terms-and-conditions.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
