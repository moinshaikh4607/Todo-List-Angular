import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  @Input() id!:number|undefined;
  title!:string;
  desc!:string;


  @Output() TodoAdd: EventEmitter<Todo> = new EventEmitter();
  
  onSubmit():void{
    if (this.title&&this.desc) {
      const todo:Todo = {
        sno : (this.id?this.id:0)+1,
        title : this.title,
        desc : this.desc,
        active : true
      }
      this.TodoAdd.emit(todo)
      this.title = ""
      this.desc = ""
      console.log("todo created")
    }else{
      alert("Title or Description Required")
    }
  }
}
