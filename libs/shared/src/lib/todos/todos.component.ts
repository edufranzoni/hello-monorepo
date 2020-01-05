import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@rapidmais/data';

@Component({
  selector: 'rapidmais-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}