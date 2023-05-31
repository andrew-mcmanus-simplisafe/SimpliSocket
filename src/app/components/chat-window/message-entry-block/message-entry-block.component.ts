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
export class MessageEntryBlockComponent implements OnInit {

  constructor(private socketService: SocketService) {}

  message: string = '';
  receivedMessages: string[] = [];

  sendMessage(): void {
    console.log('Button clicked to send message...');
    if (this.message) {
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
    console.log('Received messages')
    console.log(this.receivedMessages);
  }

  ngOnInit(): void {
    // this.socketService.receiveMessage().subscribe((data: string) => {
    //   this.receivedMessages.push(data);
    // });
    this.socketService.receiveMessage()
  }

}
