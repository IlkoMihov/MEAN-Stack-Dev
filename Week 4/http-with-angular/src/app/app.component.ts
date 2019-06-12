



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  template: `<h3>Wooho {{40 + 2}}</h3>`,
//  styleUrls: ['./app.component.css']
  styles: [`h2 {
    color: #ff276c
  }` ]
})
export class AppComponent {
  title = 'CS400 MEAN';
}
