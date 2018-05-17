import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsListComponent } from './concepts-list.component';

describe('ConceptsListComponent', () => {
  let component: ConceptsListComponent;
  let fixture: ComponentFixture<ConceptsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
