import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface TermTeamMemberRecord {
  term: 'Spring' | 'Fall' | 'Summer';
  year: number;
  teamMembers: { name: string; kuId: string }[];
}

interface TermAlumniRecord {
  term: 'Spring' | 'Fall' | 'Summer';
  year: number;
  alumni: { name: string; kuId: string }[];
}

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumniComponent implements OnInit {
  teamMembers: TermTeamMemberRecord[] = [
    {
      term: 'Spring',
      year: 2019,
      teamMembers: [{ name: 'Ahmet Uysal', kuId: 'auysal16' }, { name: 'İpek Köprülülü', kuId: 'ikoprululu16' }]
    }
  ];

  alumni: TermAlumniRecord[] = [
    {
      term: 'Spring',
      year: 2019,
      alumni: [
        { name: 'Aylin Akseki', kuId: 'aakseki15' },
        { name: 'Nurhan Hesna Aksoy', kuId: 'naksoy14' },
        { name: 'Mehmet Onur Yaşa', kuId: 'myasa18' },
        { name: 'Meryem Şeyda Zayim', kuId: 'mzayim17' },
        { name: 'Mısra Taşçı', kuId: 'mtasci18' },
        { name: 'Oğulcan Sarıoğlu', kuId: 'osarioglu14' },
        { name: 'Petrus Johannes Gerrits', kuId: 'pgerrits15' },
        { name: 'Samet Ağca', kuId: 'sagca14' },
        { name: 'Sümeyye Koşkulu', kuId: 'skoskulu17' }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
