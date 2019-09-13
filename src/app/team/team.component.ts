import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  image: string;
  title: string;
}

interface Advisor {
  name: string;
  image: string;
  title?: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: TeamMember[] = [
    {
      name: 'Ahmet Uysal',
      image: '../assets/images/ahmet.jpg',
      title: 'Senior CE Student'
    },
    {
      name: 'Ceren Kocaoğullar',
      image: '../assets/images/ceren.jpg',
      title: 'Senior CE & MAVA Student'
    },
    {
      name: 'Gül Sena Altıntaş',
      image: '../assets/images/gulsena.jpg',
      title: 'Junior CE & Math Student'
    },
    {
      name: 'Hasan Can Aslan',
      image: '../assets/images/hasancan.jpg',
      title: 'Junior CE & ECON Student'
    }
  ];

  advisors: Advisor[] = [
    { name: 'Prof. Murat Sözer', image: '../assets/images/msozer.jpg' },
    { name: 'Prof. Seda Ertaç', image: '../assets/images/sertac.jpg' },
    { name: 'Dr. Zuhal Zeybekoğlu', image: '../assets/images/zzeybekoglu.jpg' }
  ];

  constructor() {}

  ngOnInit() {}
}
