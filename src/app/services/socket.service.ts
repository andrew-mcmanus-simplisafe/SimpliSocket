import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

export interface Message {
  username: string,
  body: string,
}

export interface ConnectionInfo {
  transportType: string,
  clientIp: string,
  numberOfSockets: number,
  handshakeAddress: string,
  status: string,
  reconnectionAttempts: number,
  roundTripTime: number,
}

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  #socket: Socket;
  #lastRoundTripTime: number = 0;
  #latestSentMessageTime: number = 0;
  #latestResponseMessageTime: number = 0;

  conversationHistory: Message[] =[];
  rawSocketFrames: any[] = [];

  connectionInfo?: ConnectionInfo;

  constructor() {
    this.#socket = io('http://localhost:3000');
    this.#socket.on('connect', () => {
      console.log('Connected to server');
    });

    // Log outgoing raw messages
    this.#socket.io.engine.on('packetCreate', (packet) => {
      this.rawSocketFrames.push({
        sender: 'Client',
        body: packet
      });
    });
  }

  get roundTripTime(): number {
    if(this.#latestSentMessageTime !== 0 && this.#latestResponseMessageTime !== 0){
      this.#lastRoundTripTime = (this.#latestResponseMessageTime - this.#latestSentMessageTime)/1000;
    }
    return this.#lastRoundTripTime;
  }

  /**
   * Sends a message to the server and logs the 
   * sent message in conversation history.
   * @param message A string representing a message
   */
  sendMessage(message: string): void {
    const newMessage: Message = {
      username: 'Client',
      body: message,
    } 

    // Send message to server
    this.#socket.emit('message', newMessage);
    this.#latestSentMessageTime = new Date().getTime();
    this.getConnectionStats();
  
    // Log outgoing human readable
    this.conversationHistory.push(newMessage);
  }

  /**
   * Handles receiving a message.
   * @returns An observable of type message for 
   * reading in a stream of new messages.
   */
  receiveMessage(): Observable<Message> {
    return new Observable<Message>((observer) => {
      // Log incoming raw messages
      this.#socket.io.engine.on('packet', (packet) => {
        this.rawSocketFrames.push({
          sender: 'Server',
          body: packet
        });
      });

      // Log incoming human readable
      this.#socket.on('message', (data: Message) => {
        observer.next(data);
        this.#latestResponseMessageTime = new Date().getTime();
      });

      return () => {
        this.#socket.disconnect();
      };
    });
  }

  /**
   * Gets a collection of connection stats.
   */
  getConnectionStats(): void {


    this.connectionInfo = {
      transportType: '',
      clientIp: '',
      numberOfSockets: 0,
      handshakeAddress: '',
      status: '',
      reconnectionAttempts: 0,
      roundTripTime: this.roundTripTime,
    };
  }

}