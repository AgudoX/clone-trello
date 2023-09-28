import { Dialog } from '@angular/cdk/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';
import { Column, ToDo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  colums: Column[];
  constructor(private dialog: Dialog) {
    this.colums = [
      {
        title: 'toDo',
        todos: [
          { id: '1', title: 'Tarea 1' },
          { id: '2', title: 'Tarea 2' },
          { id: '3', title: 'Tarea 3' },
        ],
      },
      {
        title: 'doing',
        todos: [
          { id: '1', title: 'Unicornio' },
          { id: '2', title: 'Gallifante' },
          { id: '3', title: 'Gamusino' },
        ],
      },
      {
        title: 'done',
        todos: [
          { id: '1', title: 'Rosa' },
          { id: '2', title: 'Margarita' },
          { id: '3', title: 'Amapola' },
        ],
      },
    ];
  }
  drop($event: CdkDragDrop<ToDo[]>) {
    // Vemos primero si el cambio es en la misma array o en distintas
    if ($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    } else {
      // En caso de que sean en distintas le pasamos los siguiente parámetros que indica la función importada de la librería de drag and drop
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
  }

  addColumn() {
    this.colums.push({
      title: 'New column',
      todos: [
        { id: '2', title: 'Margarita' },
        { id: '3', title: 'Amapola' },
      ],
    });
  }

  openDialog(data: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '60vw',
      data,
      autoFocus: false,
    });

    dialogRef.closed.subscribe((output) => console.log(output));
  }
}
