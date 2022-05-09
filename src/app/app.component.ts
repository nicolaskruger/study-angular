import { Component, Input } from '@angular/core';


const myApp = ['compopnent', 'interpolation'] as const;

type MyApp = typeof myApp[number]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  select = myApp
  component: MyApp = 'compopnent';
  aplication: MyApp  = 'interpolation'; 
  title = 'angular-create-component';
}
