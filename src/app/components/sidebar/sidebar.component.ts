import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebar = [
    {
      title: 'Категории услуг',
      link: '#',
      listSecondLvl: [
        {
          title: 'Господдержка',
          link: '#',
          listThirdLvl: [
            {
              title: 'Дом и ЖКХ',
              link: '#',
              listFourthLvl: [ 
                {
                  title: 'Бесплатное предоставление земельных участков многодетным семьям',
                  link: '#'
                },
                {
                  title: 'Выдача сертификата (его дубликата) на региональный материнский (семейный)капитал',
                  link: '#'
                },
                {
                  title: 'Заключение комплексного договора газификации объекта',
                  link: '#'
                },
                {
                  title: 'Обеспечение детей сирот жилыми помещениями',
                  link: '#'
                },
                {
                  title: 'Оформление разрешений на вселение граждан',
                  link: '#'
                },
                {
                  title: 'Постановка граждан на учет в качестве нуждающихся в жилых помещениях',
                  link: '#'
                },
                {
                  title: 'Субсидия на оплату коммунальных услуг',
                  link: '#'
                },
                {
                  title: 'Формирование списков граждан на жилье экономического класса',
                  link: '#'
                }
              ]
            },
          ]
        },
        {
          title: 'Документы',
          link: '#',
          listThirdLvl: [
          ]
        },
        {
          title: 'Жилье для молодой семьи',
          link: '#',
          listThirdLvl: [
          ]
        },
        {
          title: 'Операции с недвижимостью',
          link: '#',
          listThirdLvl: [
          ]
        },
        {
          title: 'Оплата жкх',
          link: '#',
          listThirdLvl: [
          ]
        }
      ]
    },
    {
      title: 'Комплексные услуги',
      link: '#',
      listSecondLvl: [
        {
          title: 'Открытие своего дела',
          link: '#',
          listThirdLvl: [

          ]
        },
        {
          title: 'Смена места жительства',
          link: '#',
          listThirdLvl: [

          ]
        },
        {
          title: 'Утрата документов',
          link: '#',
          listThirdLvl: [

          ]
        },
      ]
    },
    {
      title: 'Бизнесу',
      link: '#',
      listSecondLvl: []
    },
    {
      title: 'Версия для слабовидящих',
      link: '#',
      listSecondLvl: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
