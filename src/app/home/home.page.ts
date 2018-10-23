import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message';

import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  message: string;
  messages: Array<ChatMessage>;
  @ViewChild('messageInput')
  inp;

  constructor(
    private chat: ChatService,
    private keyboard: Keyboard,
    private platform: Platform
  ) {}

  ngOnInit() {
    // So this is totally bogus, really, and should not be done.
    // It is just here to show that the keyboard plugin is in fact installed
    // and working. You should see the keyboard briefly flash.
    this.platform.ready().then(() => {
      this.keyboard.show();
    });
  }

  sendMessage(evt: Event) {
    this.inp.setFocus();
    if (this.message) {
      this.chat.send(this.message);
      this.messages = this.chat.history();
      this.message = '';
    }
  }
}
