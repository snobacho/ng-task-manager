import { Component } from '@angular/core';
import { Todo } from './Todos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    todos: Todo[]= []
    newTodo: string
   

    addTodo(){
    
    if(this.newTodo){
      let todo = new Todo
      todo.name = this.newTodo
      todo.isCompleted = true
      this.todos.push(todo)
    } else {
      alert('bla')
    }
 
  }


  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted
  }

  removeTodo(id: number){
    console.log();
      this.todos = this.todos.filter((y, i) => i !==id)
  }

}
