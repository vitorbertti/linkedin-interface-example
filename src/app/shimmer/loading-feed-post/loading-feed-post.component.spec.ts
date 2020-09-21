import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFeedPostComponent } from './loading-feed-post.component';

describe('LoadingFeedPostComponent', () => {
  let component: LoadingFeedPostComponent;
  let fixture: ComponentFixture<LoadingFeedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingFeedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingFeedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
