import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangItem, NavItem, RoutesConfig } from '../interfaces';
import { Routes } from '../routing/app-routes';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentLanguage: string = 'en';
  routes: RoutesConfig = Routes;

  constructor(private translate: TranslateService) {
  }

  handleLanguageIntialization(): void{
    this.translate.addLangs(['en', 'klingon']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.currentLanguage);
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  getNavList(): NavItem[] {
    return [
      { title: 'HOMEPAGE.HOME', routeLink: this.routes.home },
      { title: 'HOMEPAGE.ABOUT', routeLink: this.routes.about },
      { title: 'HOMEPAGE.CONTACT', routeLink: this.routes.contact },
    ];
  }

  getLangList(): LangItem[] {
    return [
      { title: 'HOMEPAGE.ENGLISH', nickTitle: 'en' },
      { title: 'HOMEPAGE.GERMAN', nickTitle: 'de' },
    ];
  }
}
