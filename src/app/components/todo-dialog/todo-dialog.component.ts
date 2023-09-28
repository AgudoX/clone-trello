import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
  faCheckToSlot,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { Column, ToDo } from 'src/app/model/todo.model';

interface outputData {
  res: boolean;
}
@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faCheckToSlot = faCheckToSlot;
  faClose = faClose;
  toDo!: ToDo;

  constructor(
    private dialogRef: DialogRef<outputData>,
    @Inject(DIALOG_DATA) private data: ToDo
  ) {}

  ngOnInit(): void {
    this.toDo = this.data;
  }

  close() {
    this.dialogRef.close({
      res: true,
    });
  }
}
