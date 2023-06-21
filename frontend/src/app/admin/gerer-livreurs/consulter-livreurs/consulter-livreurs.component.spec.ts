import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLivreursComponent } from './consulter-livreurs.component';

describe('ConsulterLivreursComponent', () => {
  let component: ConsulterLivreursComponent;
  let fixture: ComponentFixture<ConsulterLivreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterLivreursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterLivreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
