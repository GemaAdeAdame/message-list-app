import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

import { MessagesService } from './messages.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MessagesService], // Aquí proveemos nuestro servicio al módulo
  bootstrap: [AppComponent]
})
export class AppModule { }