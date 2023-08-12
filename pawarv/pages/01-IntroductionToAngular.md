# 01 Introduction to Angular

```sh
# install angular
npm install -g @angular/cli
# check version
ng version
# create new project
ng new DemoApp
# run project
cd DemoApp
ng serve 
```

AppModule is the container of all components. It is the root module of the application.
A Component renders HTML.

```ts
@Component({
  selector: 'app-root',
  // Using Inline Template
  // templateUrl: './app.component.html',
  template: `<h1> The title is {{title}} </h1>`,

  // styleUrls: ['./app.component.css']
  // Using Inline Style
  styles: [`h1 { color: red; }`]
})
```

```sh
# Run App01GettingStarted app
cd /Users/vikrampawar/github/angular/pawarv/code/App01GettingStarted
ng serve --open
```

