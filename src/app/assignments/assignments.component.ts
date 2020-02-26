import { Component, OnInit } from '@angular/core';

const ASSIGNMENT_DATA: Assignment[] = [
  {
    title: 'Tic-Tac-Toe',
    handout:
      'https://github.com/koltpython/python-assignments-spring2020/raw/master/Assignment1/handout/spr20_assignment_1.pdf',
    starter:
      'https://kinolien.github.io/gitzip/?download=koltpython/python-assignments-spring2020/tree/master/Assignment1/starter',
    releaseDate: new Date(2020, 1, 25),
    dueDate: new Date(2020, 2, 3, 23, 59, 59)
  }
];

interface Assignment {
  title: string;
  handout: string;
  starter: string;
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
  columnsToDisplay = ['title', 'handout', 'starter', 'due'];

  constructor() {}

  ngOnInit() {}
}
