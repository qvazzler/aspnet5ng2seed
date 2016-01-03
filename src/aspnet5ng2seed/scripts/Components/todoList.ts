import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TodoItem} from '../Models/todoItem';
import {TodoService} from '../Services/todoService';

    @Component({
        selector: 'todo-list',
        template: `
    <ul>
      <todo-item *ngFor="#todo of todos" [todo]="todo"></todo-item>
    </ul>
  `,
        directives: [CORE_DIRECTIVES, TodoItem]
    })
    export class TodoList {
        public todos: Array<any>;
        constructor(private todoService: TodoService) {
            this.todos = todoService.getTodos();
        }
    }
    var TODOS = [
        {
            content: 'Discuss new feature',
            isCompleted: false
        },
        {
            content: 'Fix issue',
            isCompleted: false
        }
    ]