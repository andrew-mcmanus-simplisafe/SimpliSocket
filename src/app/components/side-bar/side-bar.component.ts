import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { ConnectionStatsComponent } from './connection-stats/connection-stats.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [
    UserListComponent,
    ConnectionStatsComponent
  ]
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
