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
      title: 'Senior COMP Student'
    },
    {
      name: 'Ceren Kocaoğullar',
      image: '../assets/images/ceren.jpg',
      title: 'Senior COMP & MAVA Student'
    },
    {
      name: 'Gül Sena Altıntaş',
      image: '../assets/images/gulsena.jpg',
      title: 'Junior COMP & MATH Student'
    },
    {
      name: 'Hasan Can Aslan',
      image: '../assets/images/hasancan.jpg',
      title: 'Junior COMP & ECON Student'
    },
    {
      name: 'Necla Mutlu',
      image: '../assets/images/necla.jpg',
      title: 'Sophomore COMP Student'
    },
    {
      name: 'Fırat Tamur',
      image: '../assets/images/firat.jpg',
      title: 'Junior COMP & INDR Student'
    },
    {
      name: 'İpek Köprülülü',
      image: '../assets/images/ipek.jpg',
      title: 'Senior COMP & MAVA Student'
    },
    {
      name: 'Ayşe Turşucular',
      image: '../assets/images/ayse.jpg',
      title: 'Sophomore ECON & INDR Student'
    },
    {
      name: 'Haluk Ceyhun Gün',
      image: '../assets/images/haluk.jpg',
      title: 'Senior ELEC Student'
    },
    {
      name: 'Halil Eralp Koçaş',
      image: '../assets/images/eralp.jpg',
      title: 'Senior ELEC & COMP Student'
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
