import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesuccessComponent } from './createsuccess.component';

describe('CreatesuccessComponent', () => {
  let component: CreatesuccessComponent;
  let fixture: ComponentFixture<CreatesuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
