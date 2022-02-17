import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCmplxServComponent } from './slider-cmplx-serv.component';

describe('SliderCmplxServComponent', () => {
  let component: SliderCmplxServComponent;
  let fixture: ComponentFixture<SliderCmplxServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCmplxServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCmplxServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
