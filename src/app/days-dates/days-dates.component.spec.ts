import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysDatesComponent } from './days-dates.component';

describe('DaysDatesComponent', () => {
  let component: DaysDatesComponent;
  let fixture: ComponentFixture<DaysDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
