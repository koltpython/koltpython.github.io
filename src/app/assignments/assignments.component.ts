import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  dataSource = ASSIGNMENT_DATA;
  columnsToDisplay = ['no', 'title', 'handout', 'starter', 'review', 'release', 'due'];

  constructor() { }

  ngOnInit() {
  }

}

const ASSIGNMENT_DATA: Assignment[] = [
  {
    no: 0,
    title: 'Welcome to Python',
    handoutLink: 'https://github.com/koltpython/python-assignments/blob/master/Assignment0/Assignment0.md',
    reviewLink: null,
    starterCode: null,
    releaseDate: new Date(2019, 1, 18, 19, 0),
    dueDate: new Date(2019, 1, 25, 17, 30)  
  }
]

export interface Assignment {
  no: number,
  title: String,
  handoutLink: String,
  reviewLink: String,
  starterCode: String,
  releaseDate: Date,
  dueDate: Date
}