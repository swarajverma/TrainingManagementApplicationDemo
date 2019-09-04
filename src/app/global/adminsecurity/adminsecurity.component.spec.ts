import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsecurityComponent } from './adminsecurity.component';

describe('AdminsecurityComponent', () => {
  let component: AdminsecurityComponent;
  let fixture: ComponentFixture<AdminsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
