import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfganistanComponent } from './afganistan.component';

describe('AfganistanComponent', () => {
  let component: AfganistanComponent;
  let fixture: ComponentFixture<AfganistanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfganistanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfganistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
