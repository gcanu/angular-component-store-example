import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosStore } from './@store/todo.store';
import { Todo } from './components/todo/todo.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodosStore],
})
export class AppComponent {
  todos$: Observable<Todo[]>;

  constructor(private todosStore: TodosStore) {
    this.todos$ = this.todosStore.selectTodos();
  }

  onChange(done: boolean, todo: Todo) {
    todo.done = done;
    this.todosStore.updateTodo(todo);
  }

  onClose(todo: Todo) {
    this.todosStore.removeTodo(todo);
  }

  newTodo() {
    this.todosStore.addTodo({
      id: null,
      name: 'Nouvelle todo',
      description: null,
      done: false,
    });
  }
}
