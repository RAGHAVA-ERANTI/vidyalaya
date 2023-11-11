import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinetRegisterComponent } from './clinet-register.component';

describe('ClinetRegisterComponent', () => {
  let component: ClinetRegisterComponent;
  let fixture: ComponentFixture<ClinetRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinetRegisterComponent]
    });
    fixture = TestBed.createComponent(ClinetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
