import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  dataSource = ASSIGNMENT_DATA;
  columnsToDisplay = ['title', 'handout', 'starter', 'review', 'due'];

  constructor() {}

  ngOnInit() {}
}

const ASSIGNMENT_DATA: Assignment[] = [
  {
    no: 0,
    title: 'Welcome to Python',
    handoutLink: 'https://github.com/koltpython/python-assignments/blob/master/Assignment0/README.md',
    reviewCondensed: 'https://github.com/koltpython/python-slides/raw/master/Review0/review0-condensed.pdf',
    reviewFull: 'https://github.com/koltpython/python-slides/raw/master/Review0/review0.pdf',
    starterCode: null,
    releaseDate: new Date(2019, 1, 18, 19, 0),
    dueDate: new Date(2019, 1, 25, 17, 30)
  },
  {
    no: 1,
    title: 'Connect Four',
    handoutLink: 'https://github.com/koltpython/python-assignments/blob/master/Assignment1/README.md',
    reviewCondensed: 'https://github.com/koltpython/python-slides/raw/master/Review1/review1-condensed.pdf',
    reviewFull: 'https://github.com/koltpython/python-slides/raw/master/Review1/review1.pdf',
    starterCode: 'https://github.com/koltpython/python-assignments/raw/master/Assignment1/connect_four.py',
    releaseDate: new Date(2019, 2, 3, 11, 0),
    dueDate: new Date(2019, 2, 11, 17, 30)
  },
  {
    no: 2,
    title: 'Classifier',
    handoutLink: 'https://github.com/koltpython/python-assignments/blob/master/Assignment2/README.md',
    reviewCondensed: '',
    reviewFull: '',
    starterCode: 'https://github.com/koltpython/python-assignments/raw/master/Assignment2/assignment2.zip',
    releaseDate: new Date(2019, 2, 24, 20, 0),
    dueDate: new Date(2019, 3, 3, 23, 59)
  },
  {
    no: 3,
    title: 'Final Project Proposal',
    handoutLink: 'https://github.com/koltpython/python-assignments/blob/master/Assignment3/README.md',
    reviewCondensed: '',
    reviewFull: '',
    starterCode: '',
    releaseDate: new Date(2019, 3, 22, 20, 0),
    dueDate: new Date(2019, 3, 29, 23, 59)
  }
];

export interface Assignment {
  no: number;
  title: String;
  handoutLink: String;
  reviewCondensed: String;
  reviewFull: String;
  starterCode: String;
  releaseDate: Date;
  dueDate: Date;
}