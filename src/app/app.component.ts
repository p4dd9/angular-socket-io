import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SocketService } from './socket.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'some title';

  sendMessageForm = this.formBuilder.group({
    username: '',
    message: '',
  });

  constructor(
    private socketService: SocketService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.socketService.broadcastMessage(this.sendMessageForm.value);
  }
}
