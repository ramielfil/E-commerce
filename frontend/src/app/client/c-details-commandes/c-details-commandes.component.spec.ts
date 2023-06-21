import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDetailsCommandesComponent } from './c-details-commandes.component';

describe('CDetailsCommandesComponent', () => {
  let component: CDetailsCommandesComponent;
  let fixture: ComponentFixture<CDetailsCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDetailsCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDetailsCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
