import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todo = input<any>();
  i = input<any>();
  deleteTodo =output<any>()
  notifyToggle= output<any>()
  delTodo(index:any){
    this.deleteTodo.emit(index);
  }
  togStatus(index:any){
    this.notifyToggle.emit(index);
  }

}
