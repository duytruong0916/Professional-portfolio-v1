import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringAppComponent } from './storing-app.component';

describe('StoringAppComponent', () => {
  let component: StoringAppComponent;
  let fixture: ComponentFixture<StoringAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoringAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
