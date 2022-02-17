import { Component, Input, OnInit } from '@angular/core';

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
    if (id == this.currentSlideID) return;

    // если все prev или next
    this.currentSlideID = id;
        
    this.prevSlideID =
      this.currentSlideID === 0 ? this.lastSlideID : this.currentSlideID - 1;
    this.nextSlideID =
      this.currentSlideID === this.lastSlideID ? 0 : this.currentSlideID + 1;
  
    // второй вариант
    //// this.nextSlideID = id;
    //// setTimeout(() => {
    ////   this.currentSlideID = id;
    ////   this.prevSlideID = this.currentSlideID === 0 ? this.lastSlideID : this.currentSlideID - 1;
    ////   this.nextSlideID = this.currentSlideID === this.lastSlideID ? 0 : this.currentSlideID + 1;
    //// }, 100)
  }

  slideChangeCondition(mode: any, id: any) {
    if (mode == 'prev') {
      return (this.currentSlideID == 0) ? (id == this.lastSlideID) : 
             (this.currentSlideID == 28) ? (id != 0 && id != 28) : 
             (id < this.currentSlideID);
    }
    if (mode == 'next') {
      return (this.currentSlideID == this.lastSlideID) ? (id == 0) : 
             (this.currentSlideID == 0) ? (id != 0 && id != 28) : 
             (id > this.currentSlideID);
    }
    return false;
  }

}
