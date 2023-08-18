import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';
import { NavbarComponent } from './Components/Layouts/navbar/navbar.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { TodoAddComponent } from './Components/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent,
    TodoItemComponent,
    TodoAddComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
