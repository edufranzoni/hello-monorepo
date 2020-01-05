import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, TodosComponent],
  exports: [TodosComponent]
})
export class SharedModule {}
