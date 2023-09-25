import { Injectable } from '@angular/core';

// Injectable antiguo, le quitamos el root en el nuevo.
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MessagesService {
  private _messageList: string[];

  constructor() {
    this._messageList = ['Hola!', 'Soy Pedro', 'Cómo estás?'];
  }

  public getMessageList() {
    return this._messageList;
  }

  public pushNewMessage(message: string) {
    this._messageList.push(message);
  }
}