import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMobAppComponent } from './home-mob-app.component';

describe('HomeMobAppComponent', () => {
  let component: HomeMobAppComponent;
  let fixture: ComponentFixture<HomeMobAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMobAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMobAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
