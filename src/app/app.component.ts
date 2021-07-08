import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocery List';
  todoList= [] as any [];
  todoItem = '';

  addItem(){
    this.todoList.push(this.todoItem)
  }
  deleteItem(index: number){
    this.todoList.splice(index, 1)
  }
}





