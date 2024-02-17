import { inject, Injectable } from '@angular/core';
import { NgxSocketService } from './ngx-socket.service';

interface IMessage {
  username: string | null;
  message: string | null;
}
@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket = inject(NgxSocketService);

  constructor() {
    this.socket.on('message', (data: Partial<IMessage>) => {
      console.log(`${data.username} wrote ${data.message}`);
    });
  }

  broadcastMessage(data: Partial<IMessage>) {
    this.socket.emit('user:message', data);
  }
}
