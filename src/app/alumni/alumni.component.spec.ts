import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniComponent } from './alumni.component';

describe('AlumniComponent', () => {
  let component: AlumniComponent;
  let fixture: ComponentFixture<AlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
