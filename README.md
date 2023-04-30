# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Run server

**Note :** if you dont install json-server use cmd : `npm install json-server`

* Run `json-server --watch db.json` for a Json Server . Navigate to `http://localhost:3000/`.

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

 The application will automatically reload if you change any of the source files.

## Project Structure

### Find the project structure of our application

```css
  Store
    |
    |--src
    |   |
    |   |--app 
    |   |   |
    |   |   |--core
    |   |   |     |--data
    |   |   |     |     |--dataStorage   /* Used as the context of my application */
    |   |   |     |     |--local-storage /* Used for controlling data in local storage */
    |   |   |     |--guard
    |   |   |     |--interceptor
    |   |   |     |--models
    |   |   |     |--module
    |   |   |     |     |--core.module /* Used to export all modules that are used at the start of the application */
    |   |   |     |--services
    |   |   |--private (Module + component) /* Used private components like layout */
    |   |   |     |--Dashboard (Module + component)
    |   |   |     |     |--components /* chartComponents (Uses chart js) */
    |   |   |     |--ListProduct (Module + component)
    |   |   |     |     |--components /* headTableComponents + itemTableComponents */
    |   |   |--public (Module + component) /* Used public components like layout */
    |   |   |     |--components
    |   |   |--shared
    |   |   |     |--components
    |   |   |     |--directive
    |   |   |     |--pipe
    |   |   |     |--shared.module.ts /* Used to export all external modules */
    ...
    |--api_server.json
```
