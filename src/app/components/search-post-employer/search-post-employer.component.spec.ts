import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostEmployerComponent } from './search-post-employer.component';

describe('SearchPostEmployerComponent', () => {
  let component: SearchPostEmployerComponent;
  let fixture: ComponentFixture<SearchPostEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPostEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
