import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
  }

  public sendMessage(message: string): void {
    this.socket.emit('message', {
      username: 'Andrew',
      input: message
    });
  }

  public receiveMessage(): Observable<string> {
    return new Observable<string>((observer) => {
      // debugger;
      this.socket.on('message', (data: string) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }
}