import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  navList = [
    {
      text: 'Дом и ЖКХ',
      link: '#',
      icon: 'bulb',
      class: 'bulb'
    },
    {
      text: 'Здоровье',
      link: '#',
      icon: 'health',
      class: 'health'
    },
    {
      text: 'Земля<br>и стройка',
      link: '#',
      icon: 'crane',
      class: 'crane'
    },
    {
      text: 'Культура<br>и спорт',
      link: '#',
      icon: 'sport',
      class: 'sport'
    },
    {
      text: 'Личные документы',
      link: '#',
      icon: 'docs',
      class: 'docs'
    },
    {
      text: 'Образование',
      link: '#',
      icon: 'education',
      class: 'education'
    },
    {
      text: 'Соцподдержка',
      link: '#',
      icon: 'socsup',
      class: 'socsup'
    },
    {
      text: 'Транспорт',
      link: '#',
      icon: 'transport',
      class: 'transport'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
