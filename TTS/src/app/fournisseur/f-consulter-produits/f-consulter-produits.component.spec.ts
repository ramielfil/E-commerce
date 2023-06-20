import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FConsulterProduitsComponent } from './f-consulter-produits.component';

describe('FConsulterProduitsComponent', () => {
  let component: FConsulterProduitsComponent;
  let fixture: ComponentFixture<FConsulterProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FConsulterProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FConsulterProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
