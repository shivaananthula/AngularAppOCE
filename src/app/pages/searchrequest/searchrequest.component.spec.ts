import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrequestComponent } from './searchrequest.component';

describe('SearchrequestComponent', () => {
  let component: SearchrequestComponent;
  let fixture: ComponentFixture<SearchrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
