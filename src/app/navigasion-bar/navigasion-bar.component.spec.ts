import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigasionBarComponent } from './navigasion-bar.component';

describe('NavigasionBarComponent', () => {
  let component: NavigasionBarComponent;
  let fixture: ComponentFixture<NavigasionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigasionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigasionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
