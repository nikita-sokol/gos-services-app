import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() id: string;
  @Input() active: any;
  @Input() activeColor: any;
  constructor() { }

  ngOnInit(): void {
  }

}
