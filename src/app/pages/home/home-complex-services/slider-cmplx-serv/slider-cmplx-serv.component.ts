import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-cmplx-serv',
  templateUrl: './slider-cmplx-serv.component.html',
  styleUrls: ['./slider-cmplx-serv.component.scss']
})
export class SliderCmplxServComponent implements OnInit {
  @Input() slides: any;
  positionTrack = 0;
  widthTrack: any;
  widthContainer: any;
  widthSlide = 288;
  marginSlide = 16;
  minPositionTrack: any;

  constructor() { }

  ngOnInit(): void {
    this.widthTrack = (this.widthSlide + this.marginSlide)*this.slides.length - this.marginSlide;
    this.widthContainer = (this.widthSlide + this.marginSlide)*4 - this.marginSlide;
    this.minPositionTrack = -(this.widthTrack - this.widthContainer);
  }

  chargeTrackPosition(mode: any) {
    if (mode === 'prev') {
      if (this.positionTrack < 0) {
        this.positionTrack += this.widthSlide + this.marginSlide;
      }
    }

    if (mode === 'next') {
      if (this.positionTrack > this.minPositionTrack) {
        this.positionTrack -= this.widthSlide + this.marginSlide;
      }
    }
  }
}
