import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserListComponent } from './components/side-bar/user-list/user-list.component';
import { ConnectionStatsComponent } from './components/side-bar/connection-stats/connection-stats.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    ChatWindowComponent,
    SideBarComponent,
    UserListComponent,
    ConnectionStatsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
