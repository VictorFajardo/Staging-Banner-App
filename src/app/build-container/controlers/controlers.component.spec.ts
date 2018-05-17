import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlersComponent } from './controlers.component';

describe('ControlersComponent', () => {
  let component: ControlersComponent;
  let fixture: ComponentFixture<ControlersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
