import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCategotieComponent } from './ajout-categotie.component';

describe('AjoutCategotieComponent', () => {
  let component: AjoutCategotieComponent;
  let fixture: ComponentFixture<AjoutCategotieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCategotieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCategotieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
