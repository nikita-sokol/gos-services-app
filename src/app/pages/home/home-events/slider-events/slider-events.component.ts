import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-events',
  templateUrl: './slider-events.component.html',
  styleUrls: ['./slider-events.component.scss']
})
export class SliderEventsComponent implements OnInit {
  @Input() slides: any;
  prevSlideID: any;
  currentSlideID = 0;
  nextSlideID = 1;
  lastSlideID: any;

  touch = false;
  pos: any = '0px';
  trfRegExp = /[-0-9.]+(?=px)/;
  transitionCurSlide = 'transform .65s, opacity .4s linear';
  posInit = 0;
  posX1 = 0;
  posX2 = 0;
  posFinal = 0;

  constructor() { }

  ngOnInit(): void {
    this.lastSlideID = this.slides.length - 1;
    this.prevSlideID = this.lastSlideID;
  }

  changeCurrentSlide(mode: any) {
    if (mode === 'prev') {
      this.currentSlideID =
        this.currentSlideID - 1 < 0 ? this.lastSlideID : this.currentSlideID - 1;
    }

    if (mode === 'next') {
      this.currentSlideID =
        this.currentSlideID === this.lastSlideID ? 0 : this.currentSlideID + 1;
    }

    this.prevSlideID =
        this.currentSlideID === 0 ? this.lastSlideID : this.currentSlideID - 1;
    this.nextSlideID =
        this.currentSlideID === this.lastSlideID ? 0 : this.currentSlideID + 1;
  }

  pagination(id: any) {
    if (id !== this.currentSlideID) {
      this.currentSlideID = id;
          
      this.prevSlideID =
          this.currentSlideID === 0 ? this.lastSlideID : this.currentSlideID - 1;
      this.nextSlideID =
          this.currentSlideID === this.lastSlideID ? 0 : this.currentSlideID + 1;
    }
  }

  slideChangeCondition(mode: any, id: any) {
    if (mode == 'prev') {
      return (this.currentSlideID == 0) ? (id == this.lastSlideID) : 
             (this.currentSlideID == this.lastSlideID) ? (id != 0 && id != this.lastSlideID) : 
             (id < this.currentSlideID);
    }
    if (mode == 'next') {
      return (this.currentSlideID == this.lastSlideID) ? (id == 0) : 
             (this.currentSlideID == 0) ? (id != 0 && id != this.lastSlideID) : 
             (id > this.currentSlideID);
    }
    return false;
  }


  getEvent(event: any) {
    event.type.search('touch') !== -1 ? event.touches[0] : event
  }

  transformSlide(id: any) {
    return (id == this.prevSlideID) ? 'translateX(-103%)' :
        (id == this.currentSlideID) ? 'translateX(' + this.pos + ')' :
        (id == this.nextSlideID) ? 'translateX(103%)' : 'translateX(0)'
  }

  transstionSlide(id: any) {
    return (id == this.prevSlideID) ? 'transform .65s, opacity .4s linear' :
        (id == this.currentSlideID) ? this.transitionCurSlide :
        (id == this.nextSlideID) ? 'transform .65s, opacity .4s linear': 'none'
  }

  swipeStart(event: any) {
    this.getEvent(event);
    this.touch = true;

    this.posInit = event.clientX;
    this.posX1 = event.clientX;
    this.transitionCurSlide = 'none';
  }

  swipeAction(event: any) {
    if (this.touch) {
      this.getEvent(event);
      this.posX2 = this.posX1 - event.clientX;
      this.pos = +this.pos.match(this.trfRegExp) - this.posX2 + 'px';
      this.posX1 = event.clientX;
    }
  }

  swipeEnd(event: any) {
    this.posFinal = this.posInit - this.posX1;
    this.transitionCurSlide = 'transform .65s, opacity .4s linear';
    this.pos = '0px';
    
    if (this.posInit < this.posX1) {
      this.changeCurrentSlide('prev');
    } else if (this.posInit > this.posX1) {
      this.changeCurrentSlide('next');
    }

    this.touch = false;
  }
}
