import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TodoService} from '../Services/todoService';

@Component({
    selector: 'todo-item',
    properties: ['todo'],
    directives: [CORE_DIRECTIVES],
    styles: [
        `
    .todo-item.completed{
      text-decoration: line-through;
    }
    `
    ],
    template: `
  <li [ngClass]="getTodoItemClass(todo)">
    {{todo.content}}
    -
    <a (click)="todoService.completed(todo)">Completed</a>
    -
    <a (click)="todoService.delete(todo)">Delete</a>
  </li>
  `
})
export class TodoItem {
    constructor(private todoService: TodoService) {
    }
    getTodoItemClass(todo) {
        if (todo.isCompleted == null) {
            todo.isCompleted = true;
        }

        var smth = {
            completed: todo.isCompleted === true,
            "todo-item": true
        }

        console.log(smth);

        return {
            completed: todo.isCompleted,
            "todo-item": true
        }
    }
}