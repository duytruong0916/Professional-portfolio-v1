import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngubettaComponent } from './angubetta.component';

describe('AngubettaComponent', () => {
  let component: AngubettaComponent;
  let fixture: ComponentFixture<AngubettaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngubettaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngubettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
