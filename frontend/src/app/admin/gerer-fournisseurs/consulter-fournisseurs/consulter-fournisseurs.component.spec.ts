import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFournisseursComponent } from './consulter-fournisseurs.component';

describe('ConsulterFournisseursComponent', () => {
  let component: ConsulterFournisseursComponent;
  let fixture: ComponentFixture<ConsulterFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFournisseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
