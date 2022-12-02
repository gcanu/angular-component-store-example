import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Output() done: EventEmitter<boolean>;
  @Output() close: EventEmitter<unknown>;
  @Input() todo: Todo;

  constructor() {
    this.done = new EventEmitter<boolean>();
    this.close = new EventEmitter<unknown>();
  }

  ngOnInit() {}

  onChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.done.emit(checked);
  }

  remove() {
    this.close.emit();
  }
}
