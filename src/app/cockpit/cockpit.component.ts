import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output('srvCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();

  serverName = '';
  serverContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent,
    });

    this.serverName = '';
    this.serverContent = '';
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.serverName,
      blueprintContent: this.serverContent,
    });

    this.serverName = '';
    this.serverContent = '';
  }
}
