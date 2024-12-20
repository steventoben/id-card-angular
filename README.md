# ID Card Angular Project
Welcome to Steven Toben's ID Card project built using Angular 19.0.5 for Graci's screening process.

## Overview of my development process

When tackling this assessment I first created a version of this project using React, as I'm more comfortable in React.
After creating the React version, I translated it to Angular.
I translated the React components to Angular components, and where there was state (editing mode) I created signals in Angular.

I felt it was best to create two components to complete this project.
One component was the ID card itself. The ID card takes an input of an ID Card interface, which contains all the fields shown in the Figma example.
The second component represents the documents/files uploaded to the ID card. This component takes in the file name and type of document (.png or .doc).

After writing the HTML templates and the small amount of component TypeScript logic, I began to write SCSS code to style everything according to the Figma example.

I created the design system colors in css by using custom css properties in the global stylesheet under the root selector in the global styles file (styles.scss).

Some of the spacing and sizing styles I got from the Figma files, and some I eyeballed by using padding/margin to space things out.
CSS Grid was used heavily throughout this project since in the ID card there are two columns with left-aligned text. To handle the overflow of text on small viewports,
I made things centered vertically and made use of media queries to adjust the column width to give the right-sided column more width.

This project was created with the Angular 19.0.5 CLI, so starting the dev server, building, and running tests can be executed as follows:

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
