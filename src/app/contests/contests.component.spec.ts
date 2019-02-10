import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsComponent } from './contests.component';

describe('ContestsComponent', () => {
  let component: ContestsComponent;
  let fixture: ComponentFixture<ContestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
