# RanjitWeb

This project was generated with Angular CLI version 16.2.2.

# Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

# Code scaffolding

Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

# Build

Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

# Running end-to-end tests

Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Project Structure

The project follows a modular folder structure, which promotes scalability and maintainability. Here's a brief overview:

src/
  app/
    core/                     # Core module (handles root module, components, services)
      app.module.ts            # Root module that declares the main components, services, etc.
      app.component.ts         # Root component (typescript logic for the app)
      app.component.html       # HTML template for the root component
      app.component.scss       # Styles for the root component (can be .css, .scss, etc.)
    components/                # Page-specific components like about, contact, etc.
      about/
      contact/
      home/
    shared/                    # Shared components, directives, pipes, etc.
      confirm-popup/
    routing/                   # Routing-related files (app-routing.module.ts, app-routes.ts)
    assets/                    # Static files like images, fonts, etc.
    environments/              # Environment-specific files (for development, production)
    services/                  # Services to handle data and business logic
    interfaces/                # Contains all interfaces used in the project

# Dependencies

Angular Material: For UI components and responsive layouts. You can learn more about Angular Material here.

ngx-translate: For handling multi-language support in the app. Documentation can be found here.

# Features

Multi-language Support: The app supports multiple languages using the ngx-translate module. Currently, the supported languages are English and German. More languages can be added by modifying the language configuration in app.service.ts and adding corresponding translation files in the assets/i18n/ directory.

Angular Material UI: The app utilizes Angular Material for prebuilt UI components, such as buttons, dialogs, and form inputs. You can customize and extend the UI with more Material components as needed.

# Services

AppService: Contains business logic for language switching, generating navigation lists, and managing routes. This 
service is injected into the AppComponent for centralized management of state and logic.

# Further help

To get more help on the Angular CLI use ng help or go check out the Angular CLI Overview and Command Reference page.

# FYI

This site has been primarily developed to showcase the code structure and quality. While the design has been optimized for desktop viewing, the mobile view is currently more limited in focus.
ignore other branches if want to see the curent code just clone main branch 

