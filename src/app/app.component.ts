import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'some title';
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    console.log(this.socketService);
  }
}
