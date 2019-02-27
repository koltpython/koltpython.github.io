import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  dataSource = ASSIGNMENT_DATA;
  columnsToDisplay = ['title', 'handout', 'starter', 'review', 'due'];

  constructor() { }

  ngOnInit() {
  }

}

const ASSIGNMENT_DATA: Assignment[] = [
  {
    no: 0,
    title: 'Welcome to Python',
    handoutLink: 'https://github.com/koltpython/python-assignments/blob/master/Assignment0/Assignment0.md',
    reviewCondensed: 'https://github.com/koltpython/python-slides/raw/master/Review0/review0-condensed.pdf',
    reviewFull: 'https://github.com/koltpython/python-slides/raw/master/Review0/review0.pdf',
    starterCode: null,
    releaseDate: new Date(2019, 1, 18, 19, 0),
    dueDate: new Date(2019, 1, 25, 17, 30)  
  }
]

export interface Assignment {
  no: number,
  title: String,
  handoutLink: String,
  reviewCondensed: String,
  reviewFull: String,
  starterCode: String,
  releaseDate: Date,
  dueDate: Date
}