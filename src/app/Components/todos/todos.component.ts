import { Component } from '@angular/core';
import { Todo } from '../../Models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
  constructor(){
    const todo = localStorage.getItem("todos")
    this.todos = []
    if (todo) {
      this.todos = JSON.parse(todo)
    }
  }

  TodoAdd(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(this.todos))
    console.log(todo)
  }
  TodoDelete(todo:Todo){
    this.todos.splice(this.todos.indexOf(todo),1)
    localStorage.setItem('todos',JSON.stringify(this.todos))
    
  }
  TodoComplete(todo:Todo){
    this.todos.map(t=>{
      if (t.sno==todo.sno) {
        t.active = !t.active
      }
      return t
    })
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

}
