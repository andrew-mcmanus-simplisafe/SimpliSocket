import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocketService } from './services/socket.service';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SocketService]
})
export class AppRoutingModule { }
