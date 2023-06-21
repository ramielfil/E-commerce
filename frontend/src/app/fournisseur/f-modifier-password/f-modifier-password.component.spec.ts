import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FModifierPasswordComponent } from './f-modifier-password.component';

describe('FModifierPasswordComponent', () => {
  let component: FModifierPasswordComponent;
  let fixture: ComponentFixture<FModifierPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FModifierPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FModifierPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
