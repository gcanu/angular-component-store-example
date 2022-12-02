import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  constructor() {}

  private todos = [
    {
      id: 0,
      name: 'Faire les courses',
      description: 'des oeufs, du lait, de la farine et du chocolat',
      done: false,
    },
    {
      id: 1,
      name: 'Faire un gâteau au chocolat',
      description: 'pour le goûter quand je viendrai à ProBTP',
      done: false,
    },
  ];

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  create(todo: Todo): Observable<Todo[]> {
    this.todos.push(todo);
    console.log('todo created !');
    return this.getTodos();
  }

  update(todo: Todo): Observable<Todo[]> {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index] = todo;
      console.log('todo updated !');
    } else {
      console.log('cannot find todo');
    }

    return this.getTodos();
  }

  remove(todo: Todo): Observable<Todo[]> {
    this.todos = this.todos.filter(_todo => _todo !== todo);
    console.log('todo removed !');
    return this.getTodos();
  }
}
