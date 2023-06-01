import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocketService, Message } from 'src/app/services/socket.service';

@Component({
  selector: 'app-raw-chat',
  templateUrl: './raw-chat.component.html',
  styleUrls: ['./raw-chat.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RawChatComponent {

  get conversationHistory(): any[] {
    return this.socketService.rawSocketFrames.reverse();
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

  /**
   * Prettifies the json to be displayed on screen.
   * @param messageBody the message body in json form
   * @returns 
   */
  prettify(messageBody: string): string {
    return JSON.stringify(messageBody, null, 2);
  }
}
