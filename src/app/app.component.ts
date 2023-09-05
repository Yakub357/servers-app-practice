import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [];
  serverName = '';
  serverContent = '';

  onAddServer() {
    this.serverElements.push({
      name: this.serverName,
      content: this.serverContent,
      type: 'server',
    });

    this.serverName = '';
    this.serverContent = '';
  }

  onAddBlueprint() {
    this.serverElements.push({
      name: this.serverName,
      content: this.serverContent,
      type: 'blueprint',
    });

    this.serverName = '';
    this.serverContent = '';
  }
}
