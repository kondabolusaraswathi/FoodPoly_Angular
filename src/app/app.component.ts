import { Component, signal , model} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from "../todo/todo.component";
// import { TfilterPipe } from "./tfilter.pipe";
import { TfilterPipe } from '../tfilter.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, TodoComponent,TfilterPipe]

})
export class AppComponent {
  title = 'foodpoly';
  todos= signal([
    {
    "title" :"exercise",
    "status":false
  },
  {
    "title" :"study",
    "status":true
  },
  {
    "title" :"sleep",
    "status":false
  }
]);
  
  newtodo= model('')
  fil =model('all')

  addTodo(){
    this.todos.update(todo=>[...todo, {title:this.newtodo(), status:false}])
  }
  deleteTodo(i:any){
    this.todos.update(todo=> todo.filter((ele, index)=> index !==i))

  }
toggleStatus(i:any){
  this.todos.update((todos)=>{
    return todos.map((ele, index)=>{
      console.log(i,index);
      if(index===i){
        ele.status = !ele.status
      }
      return ele
    })
  })
}
}
