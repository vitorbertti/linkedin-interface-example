import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagPanelComponent } from './hashtag-panel.component';

describe('HashtagPanelComponent', () => {
  let component: HashtagPanelComponent;
  let fixture: ComponentFixture<HashtagPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
