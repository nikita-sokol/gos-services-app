import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-complex-services',
  templateUrl: './home-complex-services.component.html',
  styleUrls: ['./home-complex-services.component.scss']
})
export class HomeComplexServicesComponent implements OnInit {
  slides = [
    {
      title: 'Рождение ребенка',
      slideName: 'child'
    },
    {
      title: 'Выход на пенсию',
      slideName: 'pension'
    },
    {
      title: 'Перемена имени',
      slideName: 'name-change'
    },
    {
      title: 'индивидуальное жилищное строительство',
      slideName: 'house-constr'
    },
    {
      title: 'Утрата документов',
      slideName: 'loss-docs'
    },
    {
      title: 'Утрата близкого человека',
      slideName: 'loss-person'
    },
    {
      title: 'Смена места жительства',
      slideName: 'place'
    },
    {
      title: 'Приобретение жилого помещения',
      slideName: 'purchase-house'
    },
    {
      title: 'открытие своего дела',
      slideName: 'open-case'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
