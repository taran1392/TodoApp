import { Component, OnInit } from '@angular/core';
import {Todo} from '../data-models';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  todos: Array<Todo>= [
    {id: '1', text: 'Some work to do', completed: false},
    {id: '2', text: 'Write Code', completed: false},
    {id: '3', text: 'Read Book', completed: true}
  
  ]
  ngOnInit() {
  }


  addTodo(todoText){
    if(todoText && todoText.length>0){
    const newTodo:Todo ={id:new Date().getTime()+'',text:todoText,completed:false};
    this.todos.push(newTodo);
    }
  }

  onRemoveTodo(todo:Todo){
    this.todos= this.todos.filter(t=>t.id!=todo.id);
  }

  onToggleTodoComplete(todo:Todo){
    todo.completed=!todo.completed;
    this.todos.map(t=>{
      if(t.id==todo.id)
      return todo;
      else
      return t;
    })
  }

}
