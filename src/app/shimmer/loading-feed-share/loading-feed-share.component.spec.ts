import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFeedShareComponent } from './loading-feed-share.component';

describe('LoadingFeedShareComponent', () => {
  let component: LoadingFeedShareComponent;
  let fixture: ComponentFixture<LoadingFeedShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingFeedShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingFeedShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
