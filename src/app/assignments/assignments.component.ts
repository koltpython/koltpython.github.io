import { Component, OnInit } from '@angular/core';

const ASSIGNMENT_DATA: Assignment[] = [
  {
    title: 'BMI Calculator',
    replitLink: 'https://repl.it/student_embed/assignment/3957308/f74f88fb19cf96875db4321f3cb40556',
    reviewCondensed: null,
    reviewFull: null,
    releaseDate: new Date(2019, 8, 23, 11, 30),
    dueDate: new Date(2019, 8, 23, 12, 45)
  }
];

interface Assignment {
  title: String;
  replitLink: String;
  reviewCondensed: String;
  reviewFull: String;
  releaseDate: Date;
  dueDate: Date;
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  dataSource = ASSIGNMENT_DATA;
  columnsToDisplay = ['title', 'replit', 'review', 'due'];

  constructor() {}

  ngOnInit() {}
}
