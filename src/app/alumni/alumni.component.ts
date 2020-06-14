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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlumniComponent implements OnInit {
  teamMembers: TermTeamMemberRecord[] = [
    {
      term: 'Spring',
      year: 2019,
      teamMembers: [
        { name: 'Ahmet Uysal', kuId: 'auysal16' },
        { name: 'İpek Köprülülü', kuId: 'ikoprululu16' },
      ],
    },
    {
      term: 'Fall',
      year: 2019,
      teamMembers: [
        { name: 'Ahmet Uysal', kuId: 'auysal16' },
        { name: 'Ceren Kocaoğullar', kuId: 'ckocaogullar15' },
        { name: 'Gül Sena Altıntaş', kuId: 'galtintas17' },
        { name: 'Hasan Can Aslan', kuId: 'haslan16' },
      ],
    },
    {
      term: 'Spring',
      year: 2020,
      teamMembers: [
        { name: 'Ahmet Uysal', kuId: 'auysal16' },
        { name: 'Ayşe Turşucular', kuId: 'atursucular18' },
        { name: 'Ceren Kocaoğullar', kuId: 'ckocaogullar15' },
        { name: 'Fırat Tamur', kuId: 'ftamur16' },
        { name: 'Halil Eralp Koçaş', kuId: 'hkocas15' },
        { name: 'Haluk Ceyhun Gün', kuId: 'hgun16' },
        { name: 'Hasan Can Aslan', kuId: 'haslan16' },
        { name: 'Necla Mutlu', kuId: 'nmutlu17' },
      ],
    },
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
        { name: 'Sümeyye Koşkulu', kuId: 'skoskulu17' },
      ],
    },
    {
      term: 'Fall',
      year: 2019,
      alumni: [
        { name: 'Abdullah Kahraman', kuId: 'abdullahkahraman15' },
        { name: 'Ahmet Musa Semerci', kuId: 'asemerci18' },
        { name: 'Ahmet Uyar', kuId: 'auyar19' },
        { name: 'Alp Bozdağ', kuId: 'abozdag15' },
        { name: 'Ayşe Turşucular', kuId: 'atursucular18' },
        { name: 'Beyza Nur Bayrak', kuId: 'bbayrak16' },
        { name: 'Binnaz Cemre Oğuz', kuId: 'boguz16' },
        { name: 'Canan Tezgeç', kuId: 'ctezgec16' },
        { name: 'Deniz Lefkeli', kuId: 'dlefkeli17' },
        { name: 'Duygu Sili', kuId: 'dsili15' },
        { name: 'Ebru Topçu', kuId: 'etopcu18' },
        { name: 'Ece Pınar Özer', kuId: 'eozer19' },
        { name: 'Egehan Haydaroğlu', kuId: 'ehaydaroglu18' },
        { name: 'Ekin Ulusoy', kuId: 'eulusoy18' },
        { name: 'Fatmanur Tiryaki', kuId: 'ftiryaki18' },
        { name: 'Furkan Kartal', kuId: 'fkartal16' },
        { name: 'Gamze Gümüş', kuId: 'gamzegumus19' },
        { name: 'Gonca Güven', kuId: 'gguven16' },
        { name: 'Gökçe Sevimli', kuId: 'gsevimli17' },
        { name: 'Mahsa Barzgar Vishlaghi', kuId: 'mvishlaghi15' },
        { name: 'Marco Liesen', kuId: 'mliesen19' },
        { name: 'Melike Kaplan', kuId: 'mkaplan19' },
        { name: 'Mert Akkan', kuId: 'makkan19' },
        { name: 'Mustafa Yıldız', kuId: 'myildiz19' },
        { name: 'Narinsu Bayram', kuId: 'nbayram16' },
        { name: 'Sündüz Divle', kuId: 'sdivle18' },
        { name: 'Tutku Kılıçaslan', kuId: 'tkilicarslan15' },
        { name: 'Yaren Durmuş', kuId: 'ydurmus16' },
        { name: 'Zeynep Özörnek', kuId: 'zozornek18' },
        { name: 'İlayda Arslan', kuId: 'iarslan15' },
        { name: 'İrem Uğurad', kuId: 'iugurad18' },
        { name: 'İris Eskinazi', kuId: 'ieskinazi15' },
      ],
    },
    {
      term: 'Spring',
      year: 2020,
      alumni: [
        { name: 'Ahmet Çağatay Ünsal', kuId: 'aunsal15' },
        { name: 'Ata Efes', kuId: 'aefes17' },
        { name: 'Ata Kadirioğlu', kuId: 'akadirioglu16' },
        { name: 'Atahan Kalaycı', kuId: 'akalayci18' },
        { name: 'Ayşe Tuğçe Şahin', kuId: 'asahin19' },
        { name: 'Beste Senem Değirmenci', kuId: 'bdegirmenci19' },
        { name: 'Deniz Koçer', kuId: 'dkocer17' },
        { name: 'Elif Başaran', kuId: 'ebasaran13' },
        { name: 'Emre Güler', kuId: 'eguler15' },
        { name: 'Fatma Ece Özkan', kuId: 'fozkan19' },
        { name: 'Göktuğ Karabıyık', kuId: 'gkarabiyik' },
        { name: 'Hakan Yılmazer', kuId: 'hyilmazer18' },
        { name: 'İlke Gürgan', kuId: 'igurgan17' },
        { name: 'İsmail Berker Beysel', kuId: 'ibeysel' },
        { name: 'Kutay Şenses', kuId: 'ksenses17' },
        { name: 'Lamija Grabus', kuId: 'lgrabus19' },
        { name: 'Lara Karakaya', kuId: 'lkarakaya17' },
        { name: 'Mehmet Hakan Can', kuId: 'mcan18' },
        { name: 'Meldanur Çetin', kuId: 'mcetin16' },
        { name: 'Murat Göktaş', kuId: 'mgoktas15' },
        { name: 'Ömer Faruk Günay', kuId: 'ogunay17' },
        { name: 'Oya Suran', kuId: 'oyasuran18' },
        { name: 'Özen Nergis Dolcerocca', kuId: 'odolcerocca' },
        { name: 'Rauf Günsay', kuId: 'rgunsay18' },
        { name: 'Şakir Oktay Gür', kuId: 'sgur15' },
        { name: 'Sedef Aksoy', kuId: 'saksoy17' },
        { name: 'Şeref Can Esmer', kuId: 'sesmer15' },
        { name: 'Shahin Baghirov', kuId: 'sbaghirov14' },
        { name: 'Simge Kelekçi', kuId: 'skelekci18' },
        { name: 'Tuan Berk Kılıçoğlu', kuId: 'tkilicoglu' },
        { name: 'Tuğçe Çelikçi', kuId: 'tcelikci15' },
        { name: 'Uğur Alimoğlu', kuId: 'ualimoglu17' },
        { name: 'Waseem Akhtar', kuId: 'wakhtar19' },
        { name: 'Zeynep Nur Eğlenen', kuId: 'zeglenen16' },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
