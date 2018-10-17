import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages: Array<string> = [];

  send(msg: string) {
    this.messages.push(msg);
  }

  history(): Array<string> {
    return this.messages;
  }
}
