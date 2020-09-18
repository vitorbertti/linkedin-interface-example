import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingProfilePanelComponent } from './loading-profile-panel.component';

describe('LoadingProfilePanelComponent', () => {
  let component: LoadingProfilePanelComponent;
  let fixture: ComponentFixture<LoadingProfilePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingProfilePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingProfilePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
