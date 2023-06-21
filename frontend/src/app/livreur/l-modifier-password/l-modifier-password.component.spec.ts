import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LModifierPasswordComponent } from './l-modifier-password.component';

describe('LModifierPasswordComponent', () => {
  let component: LModifierPasswordComponent;
  let fixture: ComponentFixture<LModifierPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LModifierPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LModifierPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
