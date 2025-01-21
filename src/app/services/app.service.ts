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

  handleLanguageIntialization(): void {
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
      { title: 'HOMEPAGE.FAQS', routeLink: this.routes.faq },
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
        description: 'In this blog, we’ll introduce Angular, one of the most popular frameworks for building single-page applications. You will learn the basics, including setting up an Angular project and understanding its core concepts such as modules, components, and services.',
        content: `

    <section class="content">
        <div class="container">
            <article>
                <h2>Introduction to Angular</h2>
                <p>Angular is a platform and framework for building client-side applications with HTML, CSS, and JavaScript (or TypeScript). It was created by Google and is widely used for developing single-page applications (SPAs).</p>

                <h2>Why Use Angular?</h2>
                <p>Angular offers powerful tools such as two-way data binding, dependency injection, routing, and components, which make it a solid choice for modern web development.</p>

                <h2>Setting Up Your Angular Environment</h2>
                <p>Before you start coding, you need to install Node.js and Angular CLI to set up your development environment.</p>
                <ul>
                    <li>Install Node.js: <a href="https://nodejs.org/" target="_blank">Download Node.js</a></li>
                    <li>Install Angular CLI: <code>npm install -g @angular/cli</code></li>
                </ul>

                <h2>Creating Your First Angular Application</h2>
                <p>Once Angular CLI is installed, you can create a new Angular project with the following command:</p>
                <pre><code>ng new my-angular-app</code></pre>

                <p>After creating your project, navigate to the project directory and run the application:</p>
                <pre><code>cd my-angular-app</code></pre>
                <pre><code>ng serve</code></pre>
                <p>Your Angular application will be running at <a href="http://localhost:4200" target="_blank">http://localhost:4200</a>.</p>
            </article>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Angular Guide. All rights reserved.</p>
        </div>
    </footer>`
      },
      {
        name: 'Understanding Angular Components and Templates',
        date: 'Published on February 10, 2025',
        description: 'Components are the building blocks of Angular applications. This blog explores how to create and manage components in Angular, along with their templates and styles. You will also learn how to pass data to and from components using inputs and outputs.',
        content: ` <section class="content">
        <div class="container">
            <article>
                <h2>What are Angular Components?</h2>
                <p>In Angular, components are the fundamental building blocks of an application. Each component controls a part of the user interface (UI). A component consists of three main parts:</p>
                <ul>
                    <li><strong>Template:</strong> Defines the view (HTML) for the component.</li>
                    <li><strong>Class:</strong> Contains the logic (TypeScript) for the component.</li>
                    <li><strong>Metadata:</strong> Provides Angular with additional information about the component, such as how it should be displayed and where it fits into the application.</li>
                </ul>

                <h2>Creating a Component in Angular</h2>
                <p>To create a new component, you can use the Angular CLI. Open a terminal and run the following command:</p>
                <pre><code>ng generate component component-name</code></pre>
                <p>This will create four files: a TypeScript file, an HTML template file, a CSS/SCSS file, and a testing file.</p>

                <h2>Angular Component Structure</h2>
                <p>Here’s an example of a basic Angular component:</p>
                <pre><code>import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  title = 'Angular Component Example';
}
</code></pre>
                <p>The key parts here are:</p>
                <ul>
                    <li><strong>selector:</strong> The custom HTML tag that represents this component.</li>
                    <li><strong>templateUrl:</strong> The path to the HTML file that defines the view.</li>
                    <li><strong>styleUrls:</strong> The path to the CSS/SCSS file used to style the component.</li>
                </ul>

                <h2>What are Angular Templates?</h2>
                <p>Templates in Angular define the view or structure of your component. They consist of HTML, CSS, and Angular-specific syntax that allows you to bind data and events to the view.</p>

                <h2>Template Syntax</h2>
                <p>Angular templates use specific syntax to bind data between the component class and the view. The most common types of bindings are:</p>
                <ul>
                    <li><strong>Interpolation:</strong> Use {{}} to bind component properties to the template. Example: <code>{{ title }}</code></li>
                    <li><strong>Property Binding:</strong> Use [ ] to bind properties of HTML elements to component data. Example: <code>[src]="imageUrl"</code></li>
                    <li><strong>Event Binding:</strong> Use ( ) to bind events from the template to component methods. Example: <code>(click)="onClick()"</code></li>
                    <li><strong>Two-way Binding:</strong> Use [( )] to bind data and propagate changes both ways. Example: <code>[(ngModel)]="username"</code></li>
                </ul>

                <h2>Example of a Component and Template</h2>
                <p>Here's an example of how a component and template might look:</p>
                <pre><code>import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName: string = 'John Doe';
  
  greetUser() {
    alert('Hello, ' + this.userName);
  }
}
</code></pre>

                <p>Template (user.component.html):</p>
                <pre><code>&lt;div&gt;
  &lt;h1&gt;Hello, &lt;span [ngClass]="{ 'highlight': true }"&gt;{{ userName }}&lt;/span&gt;!&lt;/h1&gt;
  &lt;button (click)="greetUser()"&gt;Greet&lt;/button&gt;
&lt;/div&gt;</code></pre>
                <p>The button in the template triggers the <code>greetUser()</code> method when clicked, and the user name is displayed using interpolation.</p>
            </article>
        </div>
    </section>
`
      },
      {
        name: 'Angular Services and Dependency Injection: A Deep Dive',
        date: 'Published on February 25, 2025',
        description: 'Services in Angular provide business logic and data storage. In this blog, we’ll explain how to create services and use Angular’s powerful dependency injection system to manage your application’s services and improve modularity.',
        content: `
    <section class="content">
        <div class="container">
            <article>
                <h2>What Are Angular Services?</h2>
                <p>In Angular, a service is a class that provides a specific functionality for your application. Services are used to share data and logic across components. Common examples of services include API calls, logging, authentication, and state management.</p>

                <h2>Why Use Angular Services?</h2>
                <p>Services help to keep the components focused on the UI, while services handle business logic, data management, and interaction with external resources like APIs. This separation of concerns makes Angular applications more modular and easier to maintain.</p>

                <h2>Creating a Service in Angular</h2>
                <p>To create a service in Angular, use the Angular CLI with the following command:</p>
                <pre><code>ng generate service service-name</code></pre>
                <p>This generates a service file that typically contains methods for handling data, logic, or API interactions.</p>

                <h2>Example of an Angular Service</h2>
                <p>Here’s an example of a simple service that fetches data from an API:</p>
                <pre><code>import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}</code></pre>
                <p>In this example, the service is using Angular’s HttpClient module to fetch data from an API. The <code>@Injectable</code> decorator makes this service injectable into other parts of the application.</p>

                <h2>What is Dependency Injection (DI)?</h2>
                <p>Dependency Injection is a design pattern used to implement IoC (Inversion of Control). Angular's DI system allows you to define how dependencies (such as services) are provided to components, directives, or other services without manually creating or managing them.</p>

                <h2>How Does Angular Dependency Injection Work?</h2>
                <p>Angular's DI mechanism automatically injects services into components and other services. The key to DI in Angular is the <code>@Injectable</code> decorator, which marks the service as available for injection. Angular’s injector is responsible for creating instances of services and managing their lifecycle.</p>

                <h2>Injecting a Service into a Component</h2>
                <p>Once a service is created and marked with <code>@Injectable</code>, it can be injected into a component using the constructor. Here's how to inject the <code>DataService</code> from the previous example into a component:</p>
                <pre><code>import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}</code></pre>
                <p>In the example above, the <code>DataService</code> is injected into the component's constructor, allowing the component to fetch data when it initializes (<code>ngOnInit</code>).</p>

                <h2>Injecting Services at Different Levels</h2>
                <p>Angular services can be injected at different levels of an application, with various scopes:</p>
                <ul>
                    <li><strong>Root level:</strong> Services provided at the root level using <code>providedIn: 'root'</code> are singleton services that are available application-wide.</li>
                    <li><strong>Component level:</strong> Services can also be provided within a component, making them only available to that component and its children.</li>
                    <li><strong>Module level:</strong> Services can be provided at the module level, available throughout the module but not outside it.</li>
                </ul>

                <h2>Example of Root-Level Injection</h2>
                <p>To provide a service globally across the entire app, use <code>providedIn: 'root'</code> in the service definition:</p>
                <pre><code>@Injectable({
  providedIn: 'root',
})
export class DataService {
  // service logic
}</code></pre>
                <p>By specifying <code>providedIn: 'root'</code>, Angular ensures there is only one instance of the service, making it a singleton across the entire application.</p>
            </article>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Angular Services Guide. All rights reserved.</p>
        </div>
    </footer>`
      },
      {
        name: 'Routing in Angular: How to Navigate Between Views',
        date: 'Published on March 10, 2025',
        description: 'Routing allows you to navigate between different views or components in an Angular application. In this blog, you’ll learn how to set up the Angular Router, define routes, and pass parameters to components as you navigate between views.',
        content: `    <section class="content">
        <div class="container">
            <article>
                <h2>What is Routing in Angular?</h2>
                <p>Routing in Angular allows you to navigate between different views or pages in a single-page application (SPA). By using routes, you can display different components based on the URL in the browser's address bar. Angular provides a powerful and flexible routing module to handle these transitions.</p>

                <h2>Setting Up Routing in Angular</h2>
                <p>To get started with routing in Angular, you first need to import the <code>RouterModule</code> and set up routes in your application. Here are the steps to set up routing:</p>
                
                <ol>
                    <li><strong>Step 1:</strong> Install Angular Router (if not already installed):
                        <pre><code>npm install @angular/router</code></pre>
                    </li>
                    <li><strong>Step 2:</strong> Import <code>RouterModule</code> in your application module:</li>
                    <pre><code>import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }</code></pre>

                <h2>Defining Routes</h2>
                <p>In the <code>RouterModule.forRoot()</code> method, you define the routes in your application. Each route is an object containing:</p>
                <ul>
                    <li><strong>path:</strong> The URL path you want to match.</li>
                    <li><strong>component:</strong> The component to display when the path matches.</li>
                    <li><strong>redirectTo:</strong> Redirects a path to another URL (useful for setting default routes).</li>
                    <li><strong>pathMatch:</strong> Defines how Angular should match the path. Use <code>full</code> for an exact match.</li>
                </ul>

                <h2>Displaying Views Using Router Outlet</h2>
                <p>Once the routes are defined, you need a place in your app's layout where the components will be displayed. You do this using the <code>&lt;router-outlet&gt;</code> directive. The <code>router-outlet</code> tag is used as a placeholder for the routed component.</p>
                <pre><code>&lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>

                <p>Place the <code>&lt;router-outlet&gt;</code> in your root component's template (e.g., <code>app.component.html</code>), where you want the routed views to appear:</p>
                <pre><code>&lt;div&gt;
  &lt;nav&gt;
    &lt;a routerLink="/home"&gt;Home&lt;/a&gt; |
    &lt;a routerLink="/about"&gt;About&lt;/a&gt;
  &lt;/nav&gt;
  &lt;router-outlet&gt;&lt;/router-outlet&gt;
&lt;/div&gt;</code></pre>

                <h2>Linking Between Views</h2>
                <p>To navigate between views, use the <code>routerLink</code> directive in the template. This directive will automatically handle navigation when the user clicks on a link:</p>
                <pre><code>&lt;a routerLink="/home"&gt;Go to Home&lt;/a&gt;</code></pre>

                <h2>Handling Navigation Programmatically</h2>
                <p>You can also navigate programmatically using the Angular Router's <code>navigate()</code> method. For example, in a component class, you can use the following code to navigate to a route:</p>
                <pre><code>import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  template: '&lt;button (click)="navigateToHome()"&gt;Go to Home&lt;/button&gt;',
})
export class NavComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}</code></pre>

                <h2>Example of Full Routing Setup</h2>
                <p>Here’s a simple example with two components: <code>HomeComponent</code> and <code>AboutComponent</code>:</p>
                
                <pre><code>import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '&lt;h2&gt;Welcome to the Home Page!&lt;/h2&gt;',
})
export class HomeComponent {}

@Component({
  selector: 'app-about',
  template: '&lt;h2&gt;About Us&lt;/h2&gt;',
})
export class AboutComponent {}</code></pre>
                
                <p>In this example, when you click on the "Home" or "About" links in the navbar, Angular will display the corresponding component inside the <code>&lt;router-outlet&gt;</code> tag.</p>

            </article>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Angular Routing Guide. All rights reserved.</p>
        </div>
    </footer>`
      },
      {
        name: 'Mastering Forms in Angular: Template-driven vs Reactive Forms',
        date: 'Published on March 30, 2025',
        description: 'Angular provides two types of forms: template-driven and reactive. This blog covers the differences between the two approaches and walks you through how to create and validate forms in Angular using both methods.',
        content: `    <section class="content">
        <div class="container">
            <article>
                <h2>What Are Angular Forms?</h2>
                <p>In Angular, forms are an essential part of collecting and validating user inputs. Angular offers two approaches to handle forms:</p>
                <ul>
                    <li><strong>Template-driven forms</strong>: Forms that are defined in the template with Angular directives.</li>
                    <li><strong>Reactive forms</strong>: Forms that are managed and created in the component class using the Angular ReactiveFormsModule.</li>
                </ul>

                <h2>Template-driven Forms</h2>
                <p>Template-driven forms are the simpler of the two approaches. They are defined in the HTML template, and Angular takes care of managing the form controls for you. In this approach, forms are driven by the template with Angular’s built-in directives like <code>ngModel</code>.</p>

                <h3>Example of Template-driven Form</h3>
                <pre><code>&lt;form #myForm="ngForm"&gt;
  &lt;div&gt;
    &lt;label for="name"&gt;Name&lt;/label&gt;
    &lt;input type="text" id="name" name="name" ngModel required /&gt;
  &lt;/div&gt;
  &lt;button [disabled]="!myForm.valid"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
                <p>In this example, the <code>ngModel</code> directive is used to bind the input field to the model. The <code>ngForm</code> directive creates the form object that is used to validate the form.</p>

                <h3>Advantages of Template-driven Forms</h3>
                <ul>
                    <li>Simple to use and great for small forms.</li>
                    <li>Minimal setup and less code.</li>
                    <li>Forms are defined in the HTML template, making it easier for designers and developers to work on it simultaneously.</li>
                </ul>

                <h2>Reactive Forms</h2>
                <p>Reactive forms provide more control and flexibility by managing the form's state and validation logic within the component class. Reactive forms are more robust and are better suited for complex forms.</p>

                <h3>Example of Reactive Form</h3>
                <pre><code>import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}</code></pre>
                <p>In this example, the form is created in the component class using the <code>FormBuilder</code> service, and validation is defined using Angular's built-in validators. The form is reactive and its state is controlled entirely in the class.</p>

                <h3>Advantages of Reactive Forms</h3>
                <ul>
                    <li>Better for complex forms and larger applications.</li>
                    <li>More explicit and provides better control over form state and validation.</li>
                    <li>Easier to unit test as the form logic is inside the component class.</li>
                </ul>

                <h2>Key Differences Between Template-driven and Reactive Forms</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Template-driven Forms</th>
                            <th>Reactive Forms</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Approach</td>
                            <td>Defined in the template</td>
                            <td>Defined in the component class</td>
                        </tr>
                        <tr>
                            <td>Form Control</td>
                            <td>Uses <code>ngModel</code></td>
                            <td>Uses <code>FormControl</code> and <code>FormGroup</code></td>
                        </tr>
                        <tr>
                            <td>Validation</td>
                            <td>Declarative, done in the template</td>
                            <td>Imperative, done in the component class</td>
                        </tr>
                        <tr>
                            <td>Form Management</td>
                            <td>Less flexible</td>
                            <td>More flexible and scalable</td>
                        </tr>
                    </tbody>
                </table>

                <h2>When to Use Which?</h2>
                <p>The choice between template-driven and reactive forms depends on the complexity of the form and your application's requirements:</p>
                <ul>
                    <li><strong>Template-driven forms</strong> are perfect for simple forms or when you want to quickly create a form with minimal setup.</li>
                    <li><strong>Reactive forms</strong> are better suited for complex forms that require more control, dynamic form fields, or advanced validation logic.</li>
                </ul>

                <h2>Form Validation</h2>
                <p>Both template-driven and reactive forms support built-in validators like <code>required</code>, <code>minlength</code>, and <code>maxlength</code>. You can also create custom validators for more complex scenarios. Here's an example of a custom validator in a reactive form:</p>

                <pre><code>import { AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
  const forbidden = /admin/i.test(control.value);
  return forbidden ? { 'forbiddenName': { value: control.value } } : null;
}</code></pre>

                <p>Use this validator in a reactive form like so:</p>
                <pre><code>this.myForm = this.fb.group({
  name: ['', [Validators.required, forbiddenNameValidator]]
});</code></pre>

            </article>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Angular Forms Guide. All rights reserved.</p>
        </div>
    </footer>`
      },
      {
        name: 'Angular Directives: Enhancing the DOM with Custom Behavior',
        date: 'Published on April 15, 2025',
        description: 'Directives in Angular are a powerful feature that allows you to extend HTML by adding custom behavior. This blog will introduce you to Angular’s built-in directives and guide you through creating custom directives for your Angular applications.',
        content: `    <section class="content">
        <div class="container">
            <article>
                <h2>What Are Angular Directives?</h2>
                <p>In Angular, directives are classes that allow you to manipulate the DOM in a declarative way. They enable you to extend HTML by adding custom behavior to elements. Angular has three types of directives:</p>
                <ul>
                    <li><strong>Structural Directives:</strong> Change the structure of the DOM (e.g., <code>*ngIf</code>, <code>*ngFor</code>).</li>
                    <li><strong>Attribute Directives:</strong> Modify the appearance or behavior of an element, component, or another directive (e.g., <code>ngClass</code>, <code>ngStyle</code>).</li>
                    <li><strong>Custom Directives:</strong> Custom directives created to meet specific needs within an application.</li>
                </ul>

                <h2>Using Built-in Angular Directives</h2>
                <p>Angular provides a rich set of built-in directives. Let’s explore some of the most commonly used ones:</p>

                <h3><code>*ngIf</code> Directive</h3>
                <p>The <code>*ngIf</code> directive is a structural directive used to conditionally include or exclude elements from the DOM based on the given condition:</p>
                <pre><code>&lt;div *ngIf="isVisible"&gt;This will be displayed if isVisible is true&lt;/div&gt;</code></pre>
                <p>In the above example, the <code>div</code> will only be displayed if the variable <code>isVisible</code> is true.</p>

                <h3><code>*ngFor</code> Directive</h3>
                <p>The <code>*ngFor</code> directive is another structural directive used to iterate over a collection (like an array) and create a template for each item:</p>
                <pre><code>&lt;ul&gt;
  &lt;li *ngFor="let item of items"&gt;{{ item }}&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                <p>This will create a list of <code>li</code> elements for each item in the <code>items</code> array.</p>

                <h3><code>ngClass</code> Directive</h3>
                <p>The <code>ngClass</code> directive is an attribute directive that adds or removes CSS classes dynamically based on conditions:</p>
                <pre><code>&lt;div [ngClass]="{ 'active': isActive, 'highlighted': isHighlighted }"&gt;Content&lt;/div&gt;</code></pre>
                <p>In this example, the classes <code>active</code> and <code>highlighted</code> will be applied based on the values of <code>isActive</code> and <code>isHighlighted</code>.</p>

                <h2>Creating Custom Directives</h2>
                <p>In addition to the built-in directives, Angular allows you to create your own custom directives. Custom directives are useful when you need to reuse code that modifies the DOM in a particular way across multiple components.</p>

                <h3>Step 1: Generating a Custom Directive</h3>
                <p>You can generate a custom directive using Angular CLI:</p>
                <pre><code>ng generate directive highlight</code></pre>
                <p>This command creates a new directive file <code>highlight.directive.ts</code> that can be used to enhance the DOM with custom behavior.</p>

                <h3>Step 2: Defining the Directive</h3>
                <p>In the generated directive file, you define the logic for your directive. Here’s an example of a directive that changes the background color of an element when hovered over:</p>
                <pre><code>import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // This is the custom directive selector
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}</code></pre>
                <p>In this directive, the <code>@HostListener</code> decorator is used to listen for mouse enter and mouse leave events. When the user hovers over an element, the background color is changed to yellow, and when the mouse leaves, the background color is removed.</p>

                <h3>Step 3: Using the Directive</h3>
                <p>To use the custom directive, simply apply the <code>appHighlight</code> selector to any HTML element in your template:</p>
                <pre><code>&lt;div appHighlight&gt;Hover over me to see the effect!&lt;/div&gt;</code></pre>
                <p>The background color of this <code>div</code> will change when hovered over due to the custom directive.</p>

                <h2>Directives and ViewEncapsulation</h2>
                <p>Angular provides a feature called <strong>ViewEncapsulation</strong>, which controls how styles are applied within components. When creating custom directives, you can ensure that your styles are applied only to the targeted elements, avoiding potential conflicts with other styles in the application.</p>

                <p>Angular provides three types of view encapsulation:</p>
                <ul>
                    <li><strong>Emulated:</strong> Angular emulates shadow DOM behavior and styles are scoped to the component.</li>
                    <li><strong>Native:</strong> Styles are applied only inside the component's shadow DOM.</li>
                    <li><strong>None:</strong> No encapsulation; styles affect the entire document.</li>
                </ul>

                <h2>Conclusion</h2>
                <p>Angular directives are a powerful way to manipulate and extend the behavior of the DOM in a declarative manner. By leveraging built-in directives and creating your own custom ones, you can build dynamic and reusable components with minimal effort.</p>
                <p>Start experimenting with different directives in your Angular applications to improve your development workflow and application behavior!</p>
            </article>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Angular Directives Guide. All rights reserved.</p>
        </div>
    </footer>`
      },
      {
        name: 'Angular HTTP Client: Making API Calls with RxJS Observables',
        date: 'Published on April 30, 2025',
        description: 'Angular’s HTTP Client module makes it easy to communicate with RESTful APIs. This blog will show you how to make GET, POST, PUT, and DELETE requests, handle responses with RxJS Observables, and manage error handling in your Angular app.',
        content: `<section class="content">
        <div class="container">
            <article>
                <h2>Introduction to Angular HTTP Client</h2>
                <p>In Angular, the <code>HttpClient</code> module provides a simplified API for making HTTP requests to backend services. It supports a wide variety of request methods like GET, POST, PUT, DELETE, and others, and is built on top of RxJS observables, which allows you to manage asynchronous operations with ease.</p>

                <h2>Setting Up the HTTP Client in Angular</h2>
                <p>To use Angular’s <code>HttpClient</code>, you need to import the <code>HttpClientModule</code> in your app's root module (<code>app.module.ts</code>) like this:</p>
                <pre><code>import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [...],
  imports: [
    HttpClientModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}</code></pre>

                <p>Once you've imported <code>HttpClientModule</code>, you can inject <code>HttpClient</code> into your service or component to make API calls.</p>

                <h2>Making HTTP GET Requests</h2>
                <p>The most common type of request is a <strong>GET</strong> request, which is used to retrieve data from a server. Here’s an example of how to make a GET request in Angular using the <code>HttpClient</code>:</p>

                <pre><code>import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}</code></pre>

                <p>In this example, the <code>getPosts()</code> method sends an HTTP GET request to the specified API endpoint, <code>https://jsonplaceholder.typicode.com/posts</code>, and returns an observable of the response.</p>

                <h2>Subscribing to an Observable</h2>
                <p>Once you have an observable, you need to subscribe to it in order to retrieve the data. Here’s an example of how to subscribe to the observable returned by the <code>getPosts()</code> method in a component:</p>

                <pre><code>import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}</code></pre>

                <p>In this component, the <code>ngOnInit</code> lifecycle hook is used to subscribe to the <code>getPosts()</code> observable. If the request is successful, the data is stored in the <code>posts</code> array. If there’s an error, the error is logged to the console.</p>

                <h2>Handling HTTP POST Requests</h2>
                <p>To send data to the server, you can use an HTTP POST request. Here’s how you would send a new post to the same endpoint:</p>

                <pre><code>createPost(post: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, post);
}</code></pre>

                <p>This method sends a POST request with the given <code>post</code> data to the specified API URL.</p>

                <h2>Working with RxJS Operators</h2>
                <p>Since Angular uses RxJS for handling asynchronous requests, you can use RxJS operators to transform the data or handle errors before the response is passed to the subscriber. For example, you can use the <code>map</code> operator to transform the data before it is passed to the subscriber:</p>

                <pre><code>import { map } from 'rxjs/operators';

getPosts(): Observable<any> {
  return this.http.get<any>(this.apiUrl).pipe(
    map(data => {
      return data.slice(0, 5); // Return only the first 5 posts
    })
  );
}</code></pre>

                <p>This example uses the <code>map</code> operator to return only the first 5 posts from the API response.</p>

                <h2>Handling Errors in HTTP Requests</h2>
                <p>When making HTTP requests, it’s important to handle errors gracefully. You can use the <code>catchError</code> operator to catch errors and perform custom error handling:</p>

                <pre><code>import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

getPosts(): Observable<any> {
  return this.http.get<any>(this.apiUrl).pipe(
    catchError((error) => {
      console.error('Error fetching posts:', error);
      return of([]); // Return an empty array in case of error
    })
  );
}</code></pre>

                <p>In this case, if the request fails, an empty array is returned to the subscriber instead of throwing an error.</p>

                <h2>Conclusion</h2>
                <p>Angular’s HTTP Client makes it easy to make API calls and handle responses asynchronously using RxJS observables. With operators like <code>map</code>, <code>catchError</code>, and many others, you can easily transform, manipulate, and handle errors in your HTTP requests.</p>
                <p>By using observables, you can also take advantage of powerful features like combining multiple HTTP requests or managing state across your application.</p>

                <p>Start integrating the <code>HttpClient</code> module into your Angular applications to retrieve, send, and manage data with ease!</p>
            </article>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Angular HTTP Client Guide. All rights reserved.</p>
        </div>
    </footer>`
      },
      {
        name: 'State Management in Angular: Introduction to NgRx',
        date: 'Published on May 15, 2025',
        description: 'Managing state in large Angular applications can be challenging. This blog introduces NgRx, a powerful state management library for Angular, and shows you how to use it to manage application state, handle actions, and perform side effects in a reactive manner.',
        content: `    <section class="content">
        <div class="container">
            <article>
                <h2>What is State Management?</h2>
                <p>State management is an essential part of modern front-end applications. It involves managing the state of your application (i.e., data) in a predictable and maintainable way. In Angular, managing state in larger applications can become complex, and that’s where libraries like NgRx come in.</p>

                <h2>Why Use NgRx for State Management?</h2>
                <p>NgRx is a library inspired by Redux, providing a reactive state management solution for Angular applications. It works by using the principles of the Redux pattern along with RxJS observables. It helps manage state changes, side effects, and provides a predictable flow for handling actions in an Angular app.</p>

                <h3>Key Concepts of NgRx</h3>
                <p>NgRx operates around three main concepts:</p>
                <ul>
                    <li><strong>Store:</strong> Holds the state of the application in a single, immutable object.</li>
                    <li><strong>Actions:</strong> Describes state changes, often triggered by user interactions or asynchronous events.</li>
                    <li><strong>Reducers:</strong> Pure functions that define how the state changes in response to actions.</li>
                    <li><strong>Effects:</strong> Side effects, such as HTTP requests, are handled in the Effects layer.</li>
                </ul>

                <h2>Setting Up NgRx in Angular</h2>
                <p>To use NgRx in your Angular application, you need to install the necessary packages and import them into your app module:</p>

                <pre><code>npm install @ngrx/store @ngrx/effects</code></pre>

                <p>Once the packages are installed, you can import them into your Angular module (<code>app.module.ts</code>):</p>

                <pre><code>import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './reducers/app.reducer';
import { AppEffects } from './effects/app.effects';

@NgModule({
  declarations: [...],
  imports: [
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}</code></pre>

                <p>This setup configures the store with the reducer and effects, making it possible to manage application state effectively with NgRx.</p>

                <h2>Creating Actions</h2>
                <p>Actions in NgRx represent state changes in the application. Here’s an example of an action for loading data:</p>

                <pre><code>import { createAction } from '@ngrx/store';

export const loadData = createAction('[App] Load Data');
export const loadDataSuccess = createAction('[App] Load Data Success', (data: any) => ({ data }));
export const loadDataFailure = createAction('[App] Load Data Failure', (error: any) => ({ error }));</code></pre>

                <p>In this example, we have three actions: one for initiating the load process, one for handling success, and one for handling failure.</p>

                <h2>Reducers: Handling Actions</h2>
                <p>Reducers are responsible for handling actions and updating the state. Here’s an example of a reducer to manage the state of the data:</p>

                <pre><code>import { createReducer, on } from '@ngrx/store';
import { loadData, loadDataSuccess, loadDataFailure } from './actions/app.actions';

export const initialState = {
  data: [],
  loading: false,
  error: null
};

const _appReducer = createReducer(
  initialState,
  on(loadData, state => ({ ...state, loading: true })),
  on(loadDataSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(loadDataFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}</code></pre>

                <p>In the reducer, we handle the different actions and update the state accordingly. For example, when the <code>loadData</code> action is dispatched, the loading state is set to <code>true</code>.</p>

                <h2>Effects: Handling Side Effects</h2>
                <p>Effects allow you to manage side effects such as HTTP requests or interacting with external APIs. Here’s how you can create an effect to load data from an API:</p>

                <pre><code>import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadData, loadDataSuccess, loadDataFailure } from '../actions/app.actions';

@Injectable()
export class AppEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(loadData),
    mergeMap(() => this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(data => loadDataSuccess({ data })),
        catchError(error => EMPTY.pipe(map(() => loadDataFailure({ error }))))
      ))
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}</code></pre>

                <p>In this example, the effect listens for the <code>loadData</code> action, makes an HTTP GET request to fetch data from an API, and dispatches either a <code>loadDataSuccess</code> or <code>loadDataFailure</code> action depending on the result.</p>

                <h2>Using the Store in Components</h2>
                <p>Now that we have actions, reducers, and effects set up, we can use the store in components to interact with the state. Here's how you can dispatch actions and select state in a component:</p>

                <pre><code>import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadData } from './actions/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<{ app: any }>) {
    this.data$ = store.select(state => state.app.data);
    this.loading$ = store.select(state => state.app.loading);
    this.error$ = store.select(state => state.app.error);
  }

  ngOnInit(): void {
    this.store.dispatch(loadData());
  }
}</code></pre>

                <p>In this component, we use the <code>store.select</code> method to retrieve the state from the store. The component dispatches the <code>loadData</code> action when it is initialized, and the state is automatically updated as actions are handled.</p>

                <h2>Conclusion</h2>
                <p>NgRx provides a powerful and scalable solution for managing state in large Angular applications. By following the principles of the Redux pattern and integrating RxJS observables, NgRx enables predictable state changes and efficient handling of side effects.</p>
                <p>Start integrating NgRx in your Angular projects to handle complex state management in a structured and maintainable way!</p>
            </article>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Angular NgRx Guide. All rights reserved.</p>
        </div>
    </footer>`
      },
    ]
  }
}
