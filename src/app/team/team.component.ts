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
  university?: string;
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
    {
      name: 'Prof. Barış Tan',
      image: '../assets/images/btan.jpg',
      title: 'Vice President for Academic Affairs',
      university: 'Koç University'
    },
    {
      name: 'Prof. Murat Sözer',
      image: '../assets/images/msozer.jpg',
      title: 'Director, Office of Learning and Teaching',
      university: 'Koç University'
    },
    {
      name: 'Prof. Öznur Özkasap',
      image: '../assets/images/oozkasap.jpg',
      title: 'Computer Engineering Department',
      university: 'Koç University'
    },
    {
      name: 'Prof. Barış Bozkurt',
      image: '../assets/images/bbozkurt.jpg',
      title: 'Computer Engineering Department',
      university: 'İzmir Democracy University'
    },
    {
      name: 'Dr. Banu Yobaş',
      image: '../assets/images/byobas.jpg',
      title: 'Computer Engineering Department',
      university: 'Koç University'
    },
    {
      name: 'Dr. Zuhal Zeybekoğlu',
      image: '../assets/images/zzeybekoglu.jpg',
      title: 'Manager, Office of Learning and Teaching',
      university: 'Koç University'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
