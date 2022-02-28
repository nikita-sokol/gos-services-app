import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @HostListener('window:resize') 
  onResize() {
    if (window.innerWidth <= 720) {
      this.icSearch.bgPosition = 0;
      this.icSearch.widthFrameElement = 60;
    } else {
      this.icSearch.bgPosition = 0;
      this.icSearch.widthFrameElement = 98;
    }
    this.icSearch.bgMaxPosition = -this.icSearch.widthFrame/this.icSearch.framesNumber*this.icSearch.widthFrameElement + this.icSearch.widthFrameElement * 31;
  }

  innerWidth: any;

  icSearch = {
    widthImg: 18000,
    widthFrame: 150,
    widthFrameElement: 98,
    bgPosition: 0,
    bgMaxPosition: 0,
    framesNumber: 0,
    duration: 26
  }
  
  rearchInterval: any;

  framesNumber: number;

  searchHints = [ 
    {
      text: 'Проверить статус заявления'
    },
    {
      text: 'Записаться в МФЦ'
    },
    {
      text: 'Записаться к врачу'
    },
    {
      text: 'Прикрепиться к поликлинике'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.icSearch.framesNumber  = this.icSearch.widthFrame/this.icSearch.widthFrame;
    
    this.onResize();

    this.rearchInterval = setInterval(() => {
      if (this.icSearch.bgPosition > this.icSearch.bgMaxPosition) {
        this.icSearch.bgPosition -= this.icSearch.widthFrameElement;
      } else {
        this.icSearch.bgPosition = 0;
      }
    }, this.icSearch.duration);
  }

  ngOnDestroy() {
    clearInterval(this.rearchInterval);
  }
}
