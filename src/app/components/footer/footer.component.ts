import { Component } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";
import { toBurmeseNumber } from "src/app/helpers";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  constructor(private service: TranslocoService) {}

  get YEAR() {
    return this.service.getActiveLang() == "mm"
      ? toBurmeseNumber(new Date().getFullYear())
      : new Date().getFullYear();
  }
}
