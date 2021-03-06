import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const ASSIGNMENT_DATA: Assignment[] = [
  {
    title: 'Tic-Tac-Toe',
    handout:
      'https://github.com/koltpython/python-assignments-spring2020/raw/master/Assignment1/handout/spr20_assignment_1.pdf',
    starter:
      'https://kinolien.github.io/gitzip/?download=koltpython/python-assignments-spring2020/tree/master/Assignment1/starter',
    solution:
      'https://kinolien.github.io/gitzip/?download=koltpython/python-assignments-spring2020/tree/master/Assignment1/solution',
    releaseDate: new Date(2020, 1, 25),
    dueDate: new Date(2020, 2, 3, 23, 59, 59),
  },
  {
    title: 'Data Visualization',
    handout:
      'https://github.com/koltpython/python-assignments-spring2020/raw/master/Assignment2/handout/spr20_assignment_2.pdf',
    starter:
      'https://kinolien.github.io/gitzip/?download=koltpython/python-assignments-spring2020/tree/master/Assignment2/starter',
    solution: '',
    releaseDate: new Date(2020, 3, 28),
    dueDate: new Date(2020, 4, 10, 23, 59, 59),
  },
];

interface Assignment {
  title: string;
  handout: string;
  starter: string;
  solution: string;
  releaseDate: Date;
  dueDate: Date;
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentsComponent implements OnInit {
  dataSource = ASSIGNMENT_DATA;
  columnsToDisplay = ['title', 'handout', 'starter', 'solution', 'due'];

  constructor() {}

  ngOnInit() {}
}
