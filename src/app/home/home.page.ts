import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  message: string;
  messages: Array<ChatMessage>;
  @ViewChild('messageInput') inp;

  constructor(private chat: ChatService) {}

  ngOnInit() { }

  sendMessage(evt: Event) {
    this.inp.setFocus();
    if (this.message) {
      this.chat.send(this.message);
      this.messages = this.chat.history();
      this.message = '';
    }
  }
}
