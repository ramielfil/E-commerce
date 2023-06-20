import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesEncoursComponent } from './commandes-encours.component';

describe('CommandesEncoursComponent', () => {
  let component: CommandesEncoursComponent;
  let fixture: ComponentFixture<CommandesEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesEncoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
