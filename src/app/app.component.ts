import { Component } from '@angular/core';
import { IServerContent } from './shared/content.interface';
import { ServerModel } from './shared/server.model';
import { ServerType } from './shared/type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerModel [] =[
    {type: 'server', name: 'Testserver', content: 'Just a test server!'}
  ];

  onServerAdded(serverData: IServerContent){
    this.serverElements.push({
      type: ServerType.server,
      name: serverData.serverName,
      content: serverData.serverContnet
    });
  }

  onBlueprintAdded(blueprintData: IServerContent){
    this.serverElements.push({
        type: ServerType.blueprint,
        name: blueprintData.serverName,
        content: blueprintData.serverContnet
    })
  }

}
