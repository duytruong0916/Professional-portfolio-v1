import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumstubsComponent } from './scrumstubs.component';

describe('ScrumstubsComponent', () => {
  let component: ScrumstubsComponent;
  let fixture: ComponentFixture<ScrumstubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumstubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumstubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
