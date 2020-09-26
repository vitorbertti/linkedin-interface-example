import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTrendingPanelComponent } from './loading-trending-panel.component';

describe('LoadingTrendingPanelComponent', () => {
  let component: LoadingTrendingPanelComponent;
  let fixture: ComponentFixture<LoadingTrendingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingTrendingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingTrendingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
