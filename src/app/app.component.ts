import { Component, Input } from '@angular/core';


type MyApp = 'compopnent' | 'interpolation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  component: MyApp = 'compopnent';
  aplication: MyApp  = 'interpolation'; 
  title = 'angular-create-component';
}
