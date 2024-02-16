import { inject, Injectable } from '@angular/core';
import { NgxSocketService } from './ngx-socket.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket = inject(NgxSocketService);
  constructor() {}
}
