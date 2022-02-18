import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-services',
  templateUrl: './slider-services.component.html',
  styleUrls: ['./slider-services.component.scss']
})
export class SliderServicesComponent implements OnInit {
  @Input() slides: any;
  positionTrack = 0;
  widthTrack: any;
  widthContainer: any;
  widthSlide = 288;
  marginSlide = 16;
  minPositionTrack: any;
  transition = 0.65;

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log('slides',this.slides);
    this.widthTrack = (this.widthSlide + this.marginSlide) * this.slides.length - this.marginSlide;
    this.widthContainer = (this.widthSlide + this.marginSlide) * 4 - this.marginSlide;
    this.minPositionTrack = -(this.widthTrack - this.widthContainer);
  }

  chargeTrackPosition(mode: any) {
    if (mode === 'prev') {
      if (this.positionTrack < 0) {
        this.positionTrack += this.widthSlide + this.marginSlide;
      } else {
        this.positionTrack = this.minPositionTrack;
      }
    }

    if (mode === 'next') {
      if (this.positionTrack > this.minPositionTrack) {
        this.positionTrack -= this.widthSlide + this.marginSlide;
      } else {
        this.positionTrack = 0;
      }
    }
  }
}
