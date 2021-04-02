import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  value: string;
  lists: any;

  constructor() {
    this.value = '';
    this.lists = [];
  }

  ngOnInit(): void {
  }

  addTodo = (e) => {
    e.preventDefault();
    if (this.value !== '') {
      this.lists.push({text: this.value, isDone: false});
      this.value = '';
    }
  }

  removeTodo = (index) => {
    this.lists.splice(index, 1);
  }

  doneTodo = (index) => {
    this.lists[index].isDone = !this.lists[index].isDone;
  }

}
