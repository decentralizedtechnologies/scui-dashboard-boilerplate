# Frontend Boilerplate

This Angular 6+ boilerplate aims to be the skeleton of any Terminal service. 

The UI features a top-menu, a header with notifications, a main menu sidebar and a main content section.

Styles and navigation components are shared across all services via the [Terminal frontend library](https://github.com/Terminal-Systems/frontend-library)

# Create a new service dApp

Start a new Terminal service dApp by running: 

```
git clone github:url <chosen-dApp-name>
cd <chosen-dApp-name>
npm i
```

# Structure

You will work mostly with the `src/` directory. 

The `src/app/` directory has the service modules. A module has components, each component has its own `.scss` styles. 

## Adding a new module

This command will add a new module to the `src/app/` directory and will append it to the AppModule declarations.

```
ng generate module <name> --module=app
```

## Adding a new module component

This command will add a new component to the specified module.

```
ng generate component <module-name>/<component-name> --module=<module-name>
```

After the component is generated, change the styles to `.scss` format by manually changing the file format and updating the component style definitions: 

```ts
// your.component.ts file
@Component({
  selector: 'app-main-menu-sidebar',
  templateUrl: './main-menu-sidebar.component.html',
  styleUrls: ['./main-menu-sidebar.component.scss'] // <== here
})
```

### Using the library styles in your component

Simply add this import to `your-module.component.scss` file:

```scss
@import "sass/styles";

// ...Component specific styles:
```

# Updating the service libraries

Whenever a library is updated, it can be installed by running: 

```
npm i @terminalsystems/stylesheets@<version>
npm i @terminalsystems/components@<version>
```

# Running the boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
