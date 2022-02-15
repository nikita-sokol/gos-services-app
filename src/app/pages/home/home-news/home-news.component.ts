import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {

  newsData = [
    {
      date: 'Сегодня, 11:10',
      text: 'Более 5,7 тыс звонков поступило в ЕДДС Щелкова за прошлую неделю'
    },
    {
      date: 'Сегодня, 11:10',
      text: '1 813 случаев заболевания коронавирусом выявили в Подмосковье за сутки'
    },
    {
      date: 'Сегодня, 11:10',
      text: 'Еще 1858 человек вылечились от Covid‑19 в Подмосковье'
    },
    {
      date: 'Сегодня, 11:10',
      text: 'Почти 300 человек привились от Covid‑19 в амбулатории деревни Федюково Подольска с марта'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
