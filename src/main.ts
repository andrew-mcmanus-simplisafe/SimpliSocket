import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SocketService } from './app/services/socket.service';

bootstrapApplication(AppComponent, {
  providers: [SocketService],
}).catch((error: unknown) => {
  console.error(error);
});
