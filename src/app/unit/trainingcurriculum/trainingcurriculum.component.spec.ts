import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingcurriculumComponent } from './trainingcurriculum.component';

describe('TrainingcurriculumComponent', () => {
  let component: TrainingcurriculumComponent;
  let fixture: ComponentFixture<TrainingcurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingcurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingcurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
