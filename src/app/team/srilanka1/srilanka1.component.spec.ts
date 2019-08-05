import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Srilanka1Component } from './srilanka1.component';

describe('Srilanka1Component', () => {
  let component: Srilanka1Component;
  let fixture: ComponentFixture<Srilanka1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Srilanka1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Srilanka1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
