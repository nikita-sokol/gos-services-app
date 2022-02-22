import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

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
  }

}
