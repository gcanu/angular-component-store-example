import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Todo } from '../components/todo/todo.model';
import { TodosService } from '../components/todo/todos.service';

export interface TodosState {
  todos: Todo[];
}

@Injectable()
export class TodosStore extends ComponentStore<TodosState> {
  constructor(private readonly todosService: TodosService) {
    super({ todos: [] });
    this.getTodos();
  }

  getTodos = this.effect(($) =>
    $.pipe(
      switchMap(() => this.todosService.getTodos()),
      tap((todos: Todo[]) => this.addTodos(todos))
    )
  );

  selectTodos(): Observable<Todo[]> {
    return this.select((state) => state.todos);
  }

  addTodos = this.updater((state, todos: Todo[]) => {
    return { todos };
  });

  addTodo(todo: Todo) {
    this.todosService.create(todo).pipe(tap((todos) => this.addTodos(todos)));
  }

  removeTodo = this.effect((todo$: Observable<Todo>) => {
    return todo$.pipe(
      switchMap((todo) => this.todosService.remove(todo)),
      tap((todos: Todo[]) => this.addTodos(todos))
    );
  });

  updateTodo = this.effect((todo$: Observable<Todo>) => {
    return todo$.pipe(
      switchMap((todo) => this.todosService.update(todo)),
      tap((todos: Todo[]) => this.addTodos(todos))
    );
  });
}
