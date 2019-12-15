import { Component, OnInit } from '@angular/core';

const ASSIGNMENT_DATA: Assignment[] = [];

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
