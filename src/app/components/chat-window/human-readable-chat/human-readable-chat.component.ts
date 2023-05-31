import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-human-readable-chat',
  templateUrl: './human-readable-chat.component.html',
  styleUrls: ['./human-readable-chat.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class HumanReadableChatComponent implements OnInit {

  receivedMessages: string[] = [];

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.receiveMessage().subscribe((message: string) => {
      this.receivedMessages.push(message);
      console.log(this.receivedMessages)
    });
  }

}
