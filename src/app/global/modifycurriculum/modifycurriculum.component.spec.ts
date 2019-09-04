import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycurriculumComponent } from './modifycurriculum.component';

describe('ModifycurriculumComponent', () => {
  let component: ModifycurriculumComponent;
  let fixture: ComponentFixture<ModifycurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifycurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifycurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
