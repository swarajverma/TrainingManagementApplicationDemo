import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnittrainingreportComponent } from './unittrainingreport.component';

describe('UnittrainingreportComponent', () => {
  let component: UnittrainingreportComponent;
  let fixture: ComponentFixture<UnittrainingreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnittrainingreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnittrainingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
