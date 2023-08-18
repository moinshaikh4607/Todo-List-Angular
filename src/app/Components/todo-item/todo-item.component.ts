import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Models/todo.model';

interface ITodoItemComponent {
  ngOnInit():void
  onDelete(todo:Todo):void
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements ITodoItemComponent {
  @Input() todo!:Todo;
  @Output() TodoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() TodoComplete : EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {}

  onDelete(todo:Todo): void {
    this.TodoDelete.emit(todo)
    console.log("Todo deleted")
  }
  onComplete(todo:Todo): void {
    this.TodoComplete.emit(todo)
    console.log("Todo completed")
  }

}
