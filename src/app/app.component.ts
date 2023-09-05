import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'server-1',
      content: 'just a test server',
    },
    {
      type: 'blueprint',
      name: 'server-1',
      content: 'just a test server',
    },
  ];
}
