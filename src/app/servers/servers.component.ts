import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-servers',
  // selector:'.app-servers',
  // selector:'[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = "The server was not created."
  isServerCreated = false
  serverName = "Initial server."
  servers = ["Server 1", "Server 2"]
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  createServer() {
    this.isServerCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = "The server created succssfully. Name of server is " + this.serverName
  }

}
