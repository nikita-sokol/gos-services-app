import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header-notification',
  templateUrl: './header-notification.component.html',
  styleUrls: ['./header-notification.component.scss']
})
export class HeaderNotificationComponent implements OnInit, AfterViewInit {
  @ViewChild('content') elemContent: ElementRef;
  heightContent: any;
  hidden = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeHidden() {
    this.hidden = !this.hidden;
    this.elemContent.nativeElement.style.height = (this.hidden === false) ? this.heightContent + 'px' : 0;
  }

  ngAfterViewInit() {
    this.heightContent = this.elemContent.nativeElement.offsetHeight;
    this.elemContent.nativeElement.style.height = this.heightContent + 'px';
  }


}
