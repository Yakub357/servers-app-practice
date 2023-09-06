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

  // serverName = '';
  serverContent = '';

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent,
    });

    // this.serverName = '';
    nameInput.value = '';
    this.serverContent = '';
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContent,
    });

    // this.serverName = '';
    nameInput.value = '';
    this.serverContent = '';
  }
}
