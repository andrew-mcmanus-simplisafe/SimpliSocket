import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserListComponent } from './components/side-bar/user-list/user-list.component';
import { ConnectionStatsComponent } from './components/side-bar/connection-stats/connection-stats.component';
import { HumanReadableChatComponent } from './components/chat-window/human-readable-chat/human-readable-chat.component';
import { RawChatComponent } from './components/chat-window/raw-chat/raw-chat.component';
import { MessageEntryBlockComponent } from './components/chat-window/message-entry-block/message-entry-block.component';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppComponent,
    ChatWindowComponent,
    SideBarComponent,
    UserListComponent,
    ConnectionStatsComponent,
    HumanReadableChatComponent,
    RawChatComponent,
    MessageEntryBlockComponent,
  ],
  providers: [SocketService],
  bootstrap: []
})
export class AppModule { }
