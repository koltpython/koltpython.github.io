import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {
  onlineDataSource = ONLINE_CONTEST_DATA;
  onsiteDataSource = ONSITE_CONTEST_DATA;
  columnsToDisplay = ['no', 'title', 'start', 'end', 'solutions'];

  constructor() {}

  ngOnInit() {}
}

const ONLINE_CONTEST_DATA: Contest[] = [
  {
    no: 1,
    title: 'Welcome to Python!',
    contestLink: 'https://www.hackerrank.com/kolt-python-spring2019-online-1',
    solutionsLink: 'https://github.com/koltpython/python-contests/tree/master/OnlineContests/1',
    startDate: new Date(2019, 1, 18, 19, 0),
    endDate: new Date(2019, 1, 25, 17, 30)
  },
  {
    no: 2,
    title: 'Online Contest 2',
    contestLink: 'https://www.hackerrank.com/kolt-python-spring2019-online-2',
    solutionsLink: 'https://github.com/koltpython/python-contests/tree/master/OnlineContests/2',
    startDate: new Date(2019, 1, 25, 19, 0),
    endDate: new Date(2019, 2, 4, 17, 30)
  },
  {
    no: 3,
    title: 'Online Contest 3',
    contestLink: 'https://www.hackerrank.com/kolt-python-spring2019-online-3',
    solutionsLink: 'https://github.com/koltpython/python-contests/tree/master/OnlineContests/3',
    startDate: new Date(2019, 2, 4, 19, 0),
    endDate: new Date(2019, 2, 11, 17, 30)
  },
  {
    no: 4,
    title: 'Online Contest 4',
    contestLink: 'https://www.hackerrank.com/kolt-python-spring2019-online-4',
    solutionsLink: '',
    startDate: new Date(2019, 2, 11, 19, 0),
    endDate: new Date(2019, 2, 18, 17, 30)
  },
  {
    no: 5,
    title: 'Online Contest 5',
    contestLink: 'https://www.hackerrank.com/kolt-python-spring2019-online-5',
    solutionsLink: '',
    startDate: new Date(2019, 2, 18, 19, 0),
    endDate: new Date(2019, 2, 25, 17, 30)
  }
];

const ONSITE_CONTEST_DATA: Contest[] = [
  {
    no: 1,
    title: 'Onsite Contest 1',
    contestLink: 'https://www.hackerrank.com/kolt-python-spring2019-onsite-1',
    solutionsLink: 'https://github.com/koltpython/python-contests/tree/master/OnsiteContests/1',
    startDate: new Date(2019, 1, 27, 17, 30),
    endDate: new Date(2019, 1, 27, 18, 20)
  },
  {
    no: 2,
    title: 'Onsite Contest 2',
    contestLink: 'https://www.hackerrank.com/kolt-python-spring2019-onsite-2',
    solutionsLink: 'https://github.com/koltpython/python-contests/tree/master/OnsiteContests/2',
    startDate: new Date(2019, 2, 13, 17, 30),
    endDate: new Date(2019, 2, 13, 18, 20)
  },
  {
    no: 3,
    title: 'Onsite Contest 3',
    contestLink: 'https://www.hackerrank.com/kolt-python-spring2019-onsite-3',
    solutionsLink: '',
    startDate: new Date(2019, 2, 20, 17, 30),
    endDate: new Date(2019, 2, 20, 18, 20)
  }
];

export interface Contest {
  no: number;
  title: String;
  contestLink: String;
  solutionsLink: String;
  startDate: Date;
  endDate: Date;
}
