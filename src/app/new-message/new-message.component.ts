

import { Component } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  // Variable que almacena el mensaje.
  public message: string = '';

  constructor(private messagesService: MessagesService) {}

  onSubmit(): void {
    // Añadimos el mensaje introducido por el usuario al array del servicio
    this.messagesService.pushNewMessage(this.message);
		// Reseteamos el valor del input
    this.message = '';
  }
}