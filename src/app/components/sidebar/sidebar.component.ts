import { Component, OnInit, AfterViewInit, EventEmitter, ElementRef, QueryList, ViewChild, ViewChildren, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @Input() active: boolean;
  @Output() activeChange  = new EventEmitter();
  @ViewChild('content') elemContent: ElementRef;
  @ViewChildren('secondlvl') secondlvl: QueryList<ElementRef>;

  onActiveChange(event:any) {
    if (event.target.classList.contains('overlay') || event.target.classList.contains('cross')) {
      this.activeChange.emit(false);
      this.activeLinkIdSecondLvl = null;
      this.activeLinkIdThirdLvl = null;
      this.activeLinkIdFourthLvl = null;
      this.inactiveSecondLvl();
      this.itemsThirdLvl = null;
      this.itemsFourthLvl = null;
    }
  }

  activeLinkIdSecondLvl: any = null;
  activeLinkIdThirdLvl: any = null;
  activeLinkIdFourthLvl: any = null;
  itemsThirdLvl: any = null;
  itemsFourthLvl: any = null;

  arrayHeightSecondLvl: any = [];

  sidebar: any = [
    {
      title: 'Категории услуг',
      link: '#',
      listSecondLvl: [
        {
          title: 'Дом и ЖКХ',
          link: '#',
          icon: 'bulb',
          listThirdLvl: [
            {
              title: 'Господдержка',
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
            {
              title: 'Документы',
              link: '#',
              listFourthLvl: [ ]
            },
            {
              title: 'Жилье для молодой семьи',
              link: '#',
              listFourthLvl: [ ]
            },
            {
              title: 'Операции с недвижимостью',
              link: '#',
              listFourthLvl: [ ]
            },
            {
              title: 'Оплата жкх',
              link: '#',
              listFourthLvl: [ ]
            }
          ]
        },
        {
          title: 'Здоровье',
          link: '#',
          icon: 'health',
          listThirdLvl: [
            
            {
              title: 'Медицинская помощь',
              link: '#',
              listFourthLvl: [ ]
            },
            {
              title: 'Мероприятия',
              link: '#',
              listFourthLvl: [ ]
            },
            {
              title: 'Справки и документы',
              link: '#',
              listFourthLvl: [ ]
            },
          ]
        },
        {
          title: 'Земля и стройка',
          link: '#',
          icon: 'crane',
          listThirdLvl: [
          ]
        },
        {
          title: 'Культура и спорт',
          link: '#',
          icon: 'sport',
          listThirdLvl: [
          ]
        },
        {
          title: 'Образование',
          link: '#',
          icon: 'education',
          listThirdLvl: [
          ]
        },
        {
          title: 'Соцподдержка',
          link: '#',
          icon: 'socsup',
          listThirdLvl: [
          ]
        },
        {
          title: 'Транспорт',
          link: '#',
          icon: 'transport',
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
      title: 'Версия для слабовидящих',
      link: '#',
      listSecondLvl: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.secondlvl.toArray().forEach((elem: any, i: number) => {
      this.arrayHeightSecondLvl[i] = elem.nativeElement.offsetHeight;
      elem.nativeElement.style.height = 0;
    });
  }

  onSecondLevel(id: any, listThirdLvl: any) {
    if (this.activeLinkIdSecondLvl == id) {
      return false;
    }
    this.activeLinkIdSecondLvl = id;

    if (listThirdLvl && listThirdLvl.length) {
      this.activeLinkIdSecondLvl = id;
      this.itemsThirdLvl = listThirdLvl;
    } else {
      this.itemsThirdLvl = null;
    }
    return true;
  }

  onThirdLevel(id: any, listFourthLvl: any) {
    if (this.activeLinkIdThirdLvl == id) {
      return false;
    }
    this.activeLinkIdThirdLvl = id;

    if (listFourthLvl && listFourthLvl.length) {
      this.activeLinkIdThirdLvl = id;
      this.itemsFourthLvl = listFourthLvl;
    } else {
      this.itemsFourthLvl = null;
    }
    return true;
  }

  toggleSecondLvl(event: any, id: number) {
    const arrElem = this.secondlvl.toArray();
    const elem = this.secondlvl.toArray()[id].nativeElement;
    const prevElem = elem.previousElementSibling;

    if (prevElem.classList.contains('sbr-menu__link_prevent')) {
      return true;
    }
    if (prevElem.classList.contains('_active')) {
      prevElem.classList.remove('_active');
      elem.style.height = 0;
      return false;
    }
    arrElem.forEach((el: any) => {
      el.nativeElement.previousElementSibling.classList.remove('_active');
      el.nativeElement.style.height = 0;
    });

    elem.style.height = this.arrayHeightSecondLvl[id] + 'px';
    prevElem.classList.add('_active');

    return false;
  }

  inactiveSecondLvl() {
    const arrayElem = this.secondlvl.toArray();
    arrayElem.forEach(el => {
      el.nativeElement.style.height = 0;
      el.nativeElement.previousElementSibling.classList.remove('_active');
    })
  }

}
