import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicsTeamBuilderComponent } from './epics-team-builder.component';

describe('EpicsTeamBuilderComponent', () => {
  let component: EpicsTeamBuilderComponent;
  let fixture: ComponentFixture<EpicsTeamBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicsTeamBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicsTeamBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
