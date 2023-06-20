import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AChangerPasswordComponent } from './a-changer-password.component';

describe('AChangerPasswordComponent', () => {
  let component: AChangerPasswordComponent;
  let fixture: ComponentFixture<AChangerPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AChangerPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AChangerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
