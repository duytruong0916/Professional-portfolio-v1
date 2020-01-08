import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimefoxwatchComponent } from './timefoxwatch.component';

describe('TimefoxwatchComponent', () => {
  let component: TimefoxwatchComponent;
  let fixture: ComponentFixture<TimefoxwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimefoxwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimefoxwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
