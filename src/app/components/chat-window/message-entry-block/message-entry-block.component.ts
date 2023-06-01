import { Component, OnChanges, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-message-entry-block',
  templateUrl: './message-entry-block.component.html',
  styleUrls: ['./message-entry-block.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class MessageEntryBlockComponent {

  constructor(private socketService: SocketService) {}

  message: string = '';

  sendMessage(): void {
    if (this.message) {
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
  }
}
