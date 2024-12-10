import { Component } from '@angular/core';
import { AppService } from '../services/app.service';  
import { LangItem, NavItem, RoutesConfig } from '../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLanguage: string;
  routes: RoutesConfig;
  navList: NavItem[];
  langList: LangItem[];

  constructor(private appService: AppService) {
    this.appService.handleLanguageIntialization()
    this.currentLanguage = this.appService.currentLanguage;
    this.routes = this.appService.routes;
    this.navList = this.appService.getNavList();
    this.langList = this.appService.getLangList();
  }

  switchLanguage(language: string) {
    this.appService.switchLanguage(language);
    this.currentLanguage = language;  
  }
}
