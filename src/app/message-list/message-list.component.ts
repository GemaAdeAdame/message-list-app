import { Component } from '@angular/core';



import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
  list: string[]; // Listado local del componente

  // Inyección de dependencia del servicio
  constructor(private messagesService: MessagesService) {
    this.list = messagesService.getMessageList();
  }

}