import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimerCodeComponent } from './confimer-code.component';

describe('ConfimerCodeComponent', () => {
  let component: ConfimerCodeComponent;
  let fixture: ComponentFixture<ConfimerCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfimerCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfimerCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
