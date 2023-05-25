import { Component, OnInit } from '@angular/core';
import { HumanReadableChatComponent } from './human-readable-chat/human-readable-chat.component';
import { RawChatComponent } from './raw-chat/raw-chat.component';
import { MessageEntryBlockComponent } from './message-entry-block/message-entry-block.component';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
  imports: [
    HumanReadableChatComponent,
    RawChatComponent,
    MessageEntryBlockComponent
  ],
  standalone: true,
})
export class ChatWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
