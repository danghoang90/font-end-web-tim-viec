import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplyNowComponent } from './list-apply-now.component';

describe('ListApplyNowComponent', () => {
  let component: ListApplyNowComponent;
  let fixture: ComponentFixture<ListApplyNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApplyNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApplyNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
