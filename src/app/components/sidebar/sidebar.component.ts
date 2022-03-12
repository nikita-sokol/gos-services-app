import { Component, OnInit, AfterViewInit, EventEmitter, ElementRef, QueryList, ViewChild, ViewChildren, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @Input() active: boolean;
  @Output() activeChange  = new EventEmitter();
  @ViewChildren('secondLvl') secondLvl: QueryList<ElementRef>;

  sidebar: any = [
    {
      title: 'Категории услуг',
      link: '#',
      contentSecondLvl: [
        {
          title: 'Дом и ЖКХ',
          link: '#',
          icon: 'bulb',
          contentThirdLvl: [
            {
              title: 'Господдержка',
              link: '#',
              contentFourthLvl: [ 
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
              contentFourthLvl: [ ]
            },
            {
              title: 'Жилье для молодой семьи',
              link: '#',
              contentFourthLvl: [ ]
            },
            {
              title: 'Операции с недвижимостью',
              link: '#',
              contentFourthLvl: [ ]
            },
            {
              title: 'Оплата жкх',
              link: '#',
              contentFourthLvl: [ ]
            }
          ]
        },
        {
          title: 'Здоровье',
          link: '#',
          icon: 'health',
          contentThirdLvl: [
            
            {
              title: 'Медицинская помощь',
              link: '#',
              contentFourthLvl: [ ]
            },
            {
              title: 'Мероприятия',
              link: '#',
              contentFourthLvl: [ ]
            },
            {
              title: 'Справки и документы',
              link: '#',
              contentFourthLvl: [ ]
            },
          ]
        },
        {
          title: 'Земля и стройка',
          link: '#',
          icon: 'crane',
          contentThirdLvl: [
          ]
        },
        {
          title: 'Культура и спорт',
          link: '#',
          icon: 'sport',
          contentThirdLvl: [
          ]
        },
        {
          title: 'Образование',
          link: '#',
          icon: 'education',
          contentThirdLvl: [
          ]
        },
        {
          title: 'Соцподдержка',
          link: '#',
          icon: 'socsup',
          contentThirdLvl: [
          ]
        },
        {
          title: 'Транспорт',
          link: '#',
          icon: 'transport',
          contentThirdLvl: [
          ]
        }
      ]
    },
    {
      title: 'Комплексные услуги',
      link: '#',
      contentSecondLvl: [
        {
          title: 'Открытие своего дела',
          link: '#',
          contentThirdLvl: [

          ]
        },
        {
          title: 'Смена места жительства',
          link: '#',
          contentThirdLvl: [

          ]
        },
        {
          title: 'Утрата документов',
          link: '#',
          contentThirdLvl: [

          ]
        },
      ]
    },
    {
      title: 'Бизнесу',
      link: '#',
      contentSecondLvl: [
        {
          title: 'Открытие своего дела',
          link: '#',
          contentThirdLvl: [

          ]
        },
        {
          title: 'Смена места жительства',
          link: '#',
          contentThirdLvl: [

          ]
        },
        {
          title: 'Утрата документов',
          link: '#',
          contentThirdLvl: [

          ]
        },
      ]
    },
    {
      title: 'Версия для слабовидящих',
      link: '#',
      contentSecondLvl: []
    }
  ]

  idActiveLinkSecondLvl: any = null;
  idActiveLinkThirdLvl: any = null;

  contentThirdLvl: any = null;
  contentFourthLvl: any = null;

  secondLvlHeight: any = [];

  
  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.initHeightSecondLvl();
  }

  initHeightSecondLvl() {
    this.secondLvl.toArray().forEach((elem: any, i: number) => {
      this.secondLvlHeight[i] = elem.nativeElement.offsetHeight;
      elem.nativeElement.style.height = 0;
    });
  }

  closeSidebar(event:any) {
    if (event.target.classList.contains('overlay') || event.target.classList.contains('cross')) {
      this.activeChange.emit(false);

      this.noHeightSecondLvl();
      this.resetParamsContent();
    }
  }

  resetParamsContent() {
    this.idActiveLinkSecondLvl = null;
    this.idActiveLinkThirdLvl = null;
    this.contentThirdLvl = null;
    this.contentFourthLvl = null;
  }

  onSecondLevel(id: any, contentThirdLvl: any) {
    if (this.idActiveLinkSecondLvl != id) {
      this.idActiveLinkSecondLvl = id;
      this.idActiveLinkThirdLvl = null;
      this.contentThirdLvl = null;
      this.contentFourthLvl = null;

      if (contentThirdLvl && contentThirdLvl.length) {
        this.contentThirdLvl = contentThirdLvl;
      } else {
        this.contentThirdLvl = null;
      }
    }
  }

  onThirdLevel(id: any, contentFourthLvl: any) {
    if (this.idActiveLinkThirdLvl != id) {
      this.idActiveLinkThirdLvl = id;
      this.contentFourthLvl = null;

      if (contentFourthLvl && contentFourthLvl.length) {
        this.contentFourthLvl = contentFourthLvl;
      } else {
        this.contentFourthLvl = null;
      }
    }
  }

  toggleSecondLvl(id: number) {
    if (this.sidebar[id].contentSecondLvl.length) {

      this.resetParamsContent();
      this.toggleActiveSecondLvl(id);
    }
  }

  toggleActiveSecondLvl(id: any) {
    const arraySecondLvl = this.secondLvl.toArray(),
          currentSecondLvl = arraySecondLvl[id].nativeElement,
          linkFirstLvl = currentSecondLvl.previousElementSibling,
          activeLinkFirstLvl = linkFirstLvl.classList.contains('_active');

    if (activeLinkFirstLvl) {
      linkFirstLvl.classList.remove('_active');
      currentSecondLvl.style.height = 0;
    } else {
      this.noHeightSecondLvl();

      currentSecondLvl.style.height = this.secondLvlHeight[id] + 'px';
      linkFirstLvl.classList.add('_active');
    }
  }

  noHeightSecondLvl() {
    const arrayElem = this.secondLvl.toArray();
    arrayElem.forEach(el => {
      el.nativeElement.style.height = 0;
      el.nativeElement.previousElementSibling.classList.remove('_active');
    })
  }
}