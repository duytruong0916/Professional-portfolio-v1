import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlephComponent } from './aleph.component';

describe('AlephComponent', () => {
  let component: AlephComponent;
  let fixture: ComponentFixture<AlephComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlephComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlephComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
