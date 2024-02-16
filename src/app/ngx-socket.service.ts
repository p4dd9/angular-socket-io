import { Injectable } from '@angular/core';
import { SocketIoConfig, Socket } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {
    transports: ['websocket'],
    autoConnect: true,
    reconnection: true,
  },
};

@Injectable({
  providedIn: 'root',
})
export class NgxSocketService extends Socket {
  constructor() {
    super(config);
  }
}
