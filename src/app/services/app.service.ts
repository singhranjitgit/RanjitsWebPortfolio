import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Blog, LangItem, NavItem, RoutesConfig } from '../interfaces';
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
      { title: 'HOMEPAGE.WORK', routeLink: this.routes.work },
      { title: 'HOMEPAGE.BLOGS', routeLink: this.routes.blogs },
    ];
  }

  getLangList(): LangItem[] {
    return [
      { title: 'HOMEPAGE.ENGLISH', nickTitle: 'en' },
      { title: 'HOMEPAGE.GERMAN', nickTitle: 'de' },
    ];
  }

  getBlogs(): Blog[] {
    return [
      {
        name: 'Getting Started with Angular: A Beginner’s Guide',
        date: 'Published on January 20, 2025',
        description: 'In this blog, we’ll introduce Angular, one of the most popular frameworks for building single-page applications. You will learn the basics, including setting up an Angular project and understanding its core concepts such as modules, components, and services.'
      },
      {
        name: 'Understanding Angular Components and Templates',
        date: 'Published on February 10, 2025',
        description: 'Components are the building blocks of Angular applications. This blog explores how to create and manage components in Angular, along with their templates and styles. You will also learn how to pass data to and from components using inputs and outputs.'
      },
      {
        name: 'Angular Services and Dependency Injection: A Deep Dive',
        date: 'Published on February 25, 2025',
        description: 'Services in Angular provide business logic and data storage. In this blog, we’ll explain how to create services and use Angular’s powerful dependency injection system to manage your application’s services and improve modularity.'
      },
      {
        name: 'Routing in Angular: How to Navigate Between Views',
        date: 'Published on March 10, 2025',
        description: 'Routing allows you to navigate between different views or components in an Angular application. In this blog, you’ll learn how to set up the Angular Router, define routes, and pass parameters to components as you navigate between views.'
      },
      {
        name: 'Mastering Forms in Angular: Template-driven vs Reactive Forms',
        date: 'Published on March 30, 2025',
        description: 'Angular provides two types of forms: template-driven and reactive. This blog covers the differences between the two approaches and walks you through how to create and validate forms in Angular using both methods.'
      },
      {
        name: 'Angular Directives: Enhancing the DOM with Custom Behavior',
        date: 'Published on April 15, 2025',
        description: 'Directives in Angular are a powerful feature that allows you to extend HTML by adding custom behavior. This blog will introduce you to Angular’s built-in directives and guide you through creating custom directives for your Angular applications.'
      },
      {
        name: 'Angular HTTP Client: Making API Calls with RxJS Observables',
        date: 'Published on April 30, 2025',
        description: 'Angular’s HTTP Client module makes it easy to communicate with RESTful APIs. This blog will show you how to make GET, POST, PUT, and DELETE requests, handle responses with RxJS Observables, and manage error handling in your Angular app.'
      },
      {
        name: 'State Management in Angular: Introduction to NgRx',
        date: 'Published on May 15, 2025',
        description: 'Managing state in large Angular applications can be challenging. This blog introduces NgRx, a powerful state management library for Angular, and shows you how to use it to manage application state, handle actions, and perform side effects in a reactive manner.'
      },
    ]
  }
}
