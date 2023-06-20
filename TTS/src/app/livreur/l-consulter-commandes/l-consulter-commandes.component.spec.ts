import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LConsulterCommandesComponent } from './l-consulter-commandes.component';

describe('LConsulterCommandesComponent', () => {
  let component: LConsulterCommandesComponent;
  let fixture: ComponentFixture<LConsulterCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LConsulterCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LConsulterCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
