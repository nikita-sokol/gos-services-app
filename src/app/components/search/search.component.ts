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
      this.icSearch.position = 0;
      this.icSearch.widthFrame = 60;
    } else {
      this.icSearch.position = 0;
      this.icSearch.widthFrame = 98;
    }
    this.icSearch.maxPosition = -this.icSearch.framesNumber*this.icSearch.widthFrame;
  }

  innerWidth: any;

  icSearch = {
    framesNumber: 119,
    widthFrame: 98,
    position: 0,
    maxPosition: 0,
    duration: 26
  }
  
  rearchInterval: any;

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
    this.onResize();

    this.rearchInterval = setInterval(() => {
      if (this.icSearch.position <= this.icSearch.maxPosition) {
        this.icSearch.position = 0;
      } else {
        this.icSearch.position -= this.icSearch.widthFrame;
      }
    }, this.icSearch.duration);
  }

  ngOnDestroy() {
    clearInterval(this.rearchInterval);
  }
}
