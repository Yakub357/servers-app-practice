import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  serverName = '';
  serverContent = '';

  onAddServer() {
    // this.serverElements.push({
    //   name: this.serverName,
    //   content: this.serverContent,
    //   type: 'server',
    // });
    // this.serverName = '';
    // this.serverContent = '';
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   name: this.serverName,
    //   content: this.serverContent,
    //   type: 'blueprint',
    // });
    // this.serverName = '';
    // this.serverContent = '';
  }
}
