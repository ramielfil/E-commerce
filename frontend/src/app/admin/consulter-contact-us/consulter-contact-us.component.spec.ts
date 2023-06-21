import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterContactUsComponent } from './consulter-contact-us.component';

describe('ConsulterContactUsComponent', () => {
  let component: ConsulterContactUsComponent;
  let fixture: ComponentFixture<ConsulterContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
