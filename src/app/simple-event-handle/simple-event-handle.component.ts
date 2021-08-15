import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IServerContent } from '../shared/content.interface';

@Component({
  selector: 'app-simple-event-handle',
  templateUrl: './simple-event-handle.component.html',
  styleUrls: ['./simple-event-handle.component.css']
})
export class SimpleEventHandleComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<IServerContent>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<IServerContent>(); // Added alias 'bpCreated'

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({serverName: this.newServerName, serverContnet: this.newServerContent});
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({serverName: this.newServerName, serverContnet: this.newServerContent});
  }
}
