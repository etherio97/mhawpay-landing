import { Component, Input } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
})
export class NavBarComponent {
  @Input() items: any[] = [];

  constructor(private translateService: TranslocoService) {
    this.setTitle();
    this.getLocale();
  }

  changeLang() {
    let lang = "mm";
    switch (this.lang) {
      case "မြန်မာ":
        lang = "mm";
        break;
      default:
        lang = "en";
    }
    this.setLocale(lang);
    this.setTitle();
  }

  private getLocale() {
    let localLang = localStorage.getItem("locale");
    localLang && this.setLocale(localLang);
  }

  private setLocale(lang = "") {
    this.translateService.setActiveLang(lang.toLocaleLowerCase());
    localStorage.setItem("locale", lang.toLocaleUpperCase());
  }

  private setTitle() {
    let title = document.querySelector("title");
    if (title) {
      let localLang =
        localStorage.getItem("locale") || this.translateService.getActiveLang();
      title.innerText =
        localLang.toLocaleLowerCase() == "mm" ? "မှော်ပေး" : "Mhaw Pay";
    }
  }

  get lang() {
    return this.translateService.getActiveLang() == "mm" ? "English" : "မြန်မာ";
  }
}
