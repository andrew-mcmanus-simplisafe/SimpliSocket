import { Component } from '@angular/core';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ChatWindowComponent,
    SideBarComponent,
  ]
})

export class AppComponent {
  title = 'SimpliSocket';
}
