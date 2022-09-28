import { Component, ViewChild } from '@angular/core';
import { ChatService } from '../core/chat.service';
import { ChatMessage } from '../models/chat-message';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message: string;
  messages: Array<ChatMessage>;
  @ViewChild('messageInput')
  inp: HTMLIonInputElement;

  constructor(private chat: ChatService) {}

  sendMessage(evt: Event) {
    this.inp.setFocus();
    if (this.message) {
      this.chat.send(this.message);
      this.messages = this.chat.history();
      this.message = '';
    }
  }
}
