import { AfterViewInit, Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider-events',
  templateUrl: './slider-events.component.html',
  styleUrls: ['./slider-events.component.scss']
})
export class SliderEventsComponent implements OnInit, AfterViewInit {
  @HostListener('window:resize') 
  onResize() {
    if (window.innerWidth <= 1366) {
      this.media = 'desktop_1366'
    } else {
      this.media = ''
    }
  }
  @Input() slides: any;
  prevSlideID: any;
  currentSlideID = 0;
  nextSlideID = 1;
  lastSlideID: any;
  media = '';

  touch = false;
  pos = 0;
  posUnits: any = '0px';
  trfRegExp = /[-0-9.]+(?=px)/;
  transition = 'transform .65s, opacity .4s linear';
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


  getEvent(event: any) {
    event.type.search('touch') !== -1 ? event.touches[0] : event
  }

  transformSlide(id: any) {
    return (id == this.prevSlideID) ? 'translateX(-103%)' :
        (id == this.currentSlideID) ? 'translateX(' + this.posUnits + ')' :
        (id == this.nextSlideID) ? 'translateX(103%)' : 'translateX(0)'
  }

  transstionSlide(id: any) {
    return (id == this.prevSlideID) ? 'transform .65s, opacity .4s linear' :
        (id == this.currentSlideID) ? this.transition :
        (id == this.nextSlideID) ? 'transform .65s, opacity .4s linear': 'none'
  }

  swipeStart(event: any) {
    this.getEvent(event);
    this.touch = true;

    this.posInit = event.clientX;
    this.posX1 = event.clientX;
    this.transition = 'none';
  }

  swipeAction(event: any) {
    this.getEvent(event);
    if (this.touch) {
      this.posX2 = this.posX1 - event.clientX;
      this.posUnits = +this.posUnits.match(this.trfRegExp) - this.posX2 + 'px';
      this.posX1 = event.clientX;
    }
  }

  swipeEnd(event: any) {
    this.posFinal = this.posInit - this.posX1;
    this.transition = 'transform .65s, opacity .4s linear';
    this.posUnits = '0px';
    // если мы тянули вправо, то уменьшаем номер текущего слайда
    if (this.posInit < this.posX1) {
      this.changeCurrentSlide('prev');
    // если мы тянули влево, то увеличиваем номер текущего слайда
    } else if (this.posInit > this.posX1) {
      this.changeCurrentSlide('next');
    }

    this.touch = false;
  }

  ngAfterViewInit() {
    this.onResize();
  }
}
