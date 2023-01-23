import { Component, OnInit } from '@angular/core';
import { Todo } from './Todos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todos: Todo[]= []
  newTodo: string  

   
  ngOnInit() {
    const savedTodo = localStorage.getItem('todo');
    if (savedTodo) {
      this.todos = JSON.parse(savedTodo);
    }
  }


  addTodo(){
    if(this.newTodo){
      let todo = new Todo
      todo.name = this.newTodo
      this.todos.push(todo)
      localStorage.setItem('todo', JSON.stringify(this.todos));
      this.newTodo= ''
      todo.isCompleted = true
    } else {
      alert('please add task')
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted
  }

  removeTodo(id: number){
    console.log();
      this.todos = this.todos.filter((y, i) => i !==id)
      this.todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

// * random color *******

  getRandomColor() {
    let length = 6;
    let chars = '0123456789ABCDEF';
    let hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }

}