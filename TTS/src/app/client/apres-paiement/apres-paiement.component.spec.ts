import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresPaiementComponent } from './apres-paiement.component';

describe('ApresPaiementComponent', () => {
  let component: ApresPaiementComponent;
  let fixture: ComponentFixture<ApresPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresPaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
