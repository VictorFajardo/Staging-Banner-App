import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptListComponent } from './concept-list.component';

describe('ConceptListComponent', () => {
  let component: ConceptListComponent;
  let fixture: ComponentFixture<ConceptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
