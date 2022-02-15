import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComplexServicesComponent } from './home-complex-services.component';

describe('HomeComplexServicesComponent', () => {
  let component: HomeComplexServicesComponent;
  let fixture: ComponentFixture<HomeComplexServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComplexServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComplexServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
