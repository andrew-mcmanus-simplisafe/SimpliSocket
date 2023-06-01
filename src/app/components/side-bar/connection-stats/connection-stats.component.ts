import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-connection-stats',
  templateUrl: './connection-stats.component.html',
  styleUrls: ['./connection-stats.component.scss'],
  standalone: true,
})
export class ConnectionStatsComponent {

  get connectionInfo(): any {
    this.socketService.getConnectionStats();
    return this.socketService.connectionInfo;
  }

  constructor(private socketService: SocketService) {}

}
