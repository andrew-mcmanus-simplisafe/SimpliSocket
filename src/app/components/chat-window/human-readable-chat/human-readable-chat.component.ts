import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { Message } from 'src/app/services/socket.service';


@Component({
  selector: 'app-human-readable-chat',
  templateUrl: './human-readable-chat.component.html',
  styleUrls: ['./human-readable-chat.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class HumanReadableChatComponent implements OnInit {

  get conversationHistory(): any[] {
    return this.socketService.conversationHistory.reverse();
  }

  constructor(private socketService: SocketService) {}

  /**
   * Determines what icon to show in chat - client or server
   * @param messageSender the sender.
   * @returns A pathway for the correct icon.
   */
  determineIcon(messageSender: string): string {
    return messageSender === 'Server' ? 'assets/server.png' : 'assets/client.png';
  }

  /**
   * Determines what icon to show in chat - client or server
   * @param messageSender the sender.
   * @returns A pathway for the correct icon.
   */
  getItemBackgroundColor(messageSender: string): string {
    return messageSender === 'Server' ? 'rgba(220, 220, 220, 0.796)' : 'rgba(209, 225, 253, 0.796)';
  }

  ngOnInit(): void {
    this.socketService.receiveMessage().subscribe((message: Message) => {
      this.socketService.conversationHistory.push(message);
    });
  }

}
