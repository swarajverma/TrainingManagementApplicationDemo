import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitinformationComponent } from './unitinformation.component';

describe('UnitinformationComponent', () => {
  let component: UnitinformationComponent;
  let fixture: ComponentFixture<UnitinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
