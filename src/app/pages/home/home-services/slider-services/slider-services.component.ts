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

  constructor() { 
    
  }

  ngOnInit(): void {
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

  touch = false;
  posCurInit = 0;
  posCurX1 = 0;
  posCurX2 = 0;
  posTrackInit = 0;
  posCurFinal = 0;
  posUnits: any = '0px';
  trfRegExp = /[-0-9.]+(?=px)/;
  transition = 'all .65s';

  getEvent(event: any) {
    event.type.search('touch') !== -1 ? event.touches[0] : event
  }

  swipeStart(event: any) {
    if (!this.touch) {
      this.getEvent(event);
      this.touch = true;
  
      this.posTrackInit = this.positionTrack;
      this.posCurInit = event.clientX;
      this.posCurX1 = event.clientX;
      this.transition = 'none';
    }
  }

  swipeAction(event: any) {
    if (this.touch) {
      this.getEvent(event);
      this.posCurX2 = this.posCurX1 - event.clientX;
      this.positionTrack = this.positionTrack - this.posCurX2;
      this.posCurX1 = event.clientX;
    }
  }

  swipeEnd(event: any) {
    if (this.touch) {
      this.getEvent(event);
      this.posCurFinal = this.posCurInit - event.clientX;
      this.transition = 'all .65s';
      
      const numbValue = (this.posCurFinal > 0) ? -1 : 1;
      const numSteps = -(Math.round(this.posCurFinal/(this.widthSlide + this.marginSlide)));

      this.positionTrack = this.posTrackInit + numSteps * (this.widthSlide + this.marginSlide);
      if (this.positionTrack < this.minPositionTrack) {
        this.positionTrack = this.minPositionTrack;
      }
      if (this.positionTrack > 0) {
        this.positionTrack = 0;
      }
      
      this.touch = false;
    }
  }
}
