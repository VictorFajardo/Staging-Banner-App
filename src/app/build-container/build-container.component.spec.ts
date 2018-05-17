import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildContainerComponent } from './build-container.component';

describe('BuildContainerComponent', () => {
  let component: BuildContainerComponent;
  let fixture: ComponentFixture<BuildContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
