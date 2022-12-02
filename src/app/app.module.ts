import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosService } from './components/todo/todos.service';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoComponent],
  bootstrap: [AppComponent],
  providers: [TodosService],
})
export class AppModule {}
