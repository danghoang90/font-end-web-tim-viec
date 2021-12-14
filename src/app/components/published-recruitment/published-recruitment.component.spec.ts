import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedRecruitmentComponent } from './published-recruitment.component';

describe('PublishedRecruitmentComponent', () => {
  let component: PublishedRecruitmentComponent;
  let fixture: ComponentFixture<PublishedRecruitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedRecruitmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
