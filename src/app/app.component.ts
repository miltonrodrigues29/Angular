import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';
  deathmaker = 'milton';

  //passing data her to the template.that we can pass data in here and access them in app.component.html
}
