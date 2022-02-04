import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinfraComponent } from './createinfra.component';

describe('CreateinfraComponent', () => {
  let component: CreateinfraComponent;
  let fixture: ComponentFixture<CreateinfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateinfraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateinfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
