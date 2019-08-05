import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestIndiesComponent } from './west-indies.component';

describe('WestIndiesComponent', () => {
  let component: WestIndiesComponent;
  let fixture: ComponentFixture<WestIndiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestIndiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestIndiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
