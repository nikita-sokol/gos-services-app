import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {
  slides = [
    {
      title: 'Узнать тип моей учетной записи ЕСИА',
      text: '',
      img: 'gosuslugi',
      btnText: 'Проверить',
    },
    {
      title: 'Принадлежность автомобильных дорог',
      text: 'Узнайте информацию для получения технических требований и условий',
      img: 'highways',
      label: {
        inputs: [
          {
            placeholder: 'Кадастровый номер',
            type: 'text'
          }
        ]
      },
      btnText: 'Определить',
    },
    {
      title: 'Проверка заявления в детский сад',
      text: '',
      img: 'kindergarten',
      btnText: 'Проверить',
    },
    {
      title: 'Школьный портал',
      text: 'Просматривайте дневник своего ребенка',
      className: 'school',
      btnText: 'Войти',
      label: {
        class: 'bottom',
        inputs: [
          {
            placeholder: 'Логин',
            type: 'text',
            class: 'small'
          },
          {
            placeholder: 'Логин',
            type: 'text',
            class: 'small'
          }
        ],
        links: [
          {
            text: 'Восстановить пароль',
            href: '#'
          },
          {
            text: 'Как получить доступ?',
            href: '#'
          }
        ]
      }
    },
    {
      title: 'Медицинская карта',
      text: '',
      img: 'medicine',
      btnText: 'Проверить',
    },
    {
      title: 'проверка статуса очереди в 1 класс',
      text: '',
      img: 'first-grade',
      btnText: 'проверить',
    },
    {
      title: 'Коммунальные платежи',
      text: '',
      img: 'communal-pay',
      btnText: 'передать информацию',
    },
    {
      title: 'Передача информации о водителях...',
      text: '',
      img: 'driver',
      btnText: 'передать информацию',
    },
    {
      title: 'дистанционное консультирование',
      text: '',
      img: 'consultation',
      btnText: 'подробнее',
    },
    {
      title: 'Карта офисов мфц',
      text: '',
      img: 'mfc-map',
      btnText: 'перейти',
    },
    {
      title: 'Поиск пропавших людей',
      text: 'Сервис по поиску пропавших среди пациентов больниц Подмосковья',
      img: 'people-search',
      btnText: 'подробнее',
    },
    {
      title: 'Нам сверху все видно',
      text: 'Все стройки Подмосковья в твоем телефоне',
      img: 'construction',
      btnText: 'записаться',
    },
    {
      title: 'Предзапись в МФЦ',
      text: '',
      img: 'prerecording',
      btnText: 'записаться',
      label: {
        inputs: [
          {
            placeholder: 'Введите адрес МФЦ',
            type: 'text'
          }
        ]
      }
    },
    {
      title: 'Наличие ООПТ и их охранных зон, а также ...',
      text: 'Предоставление сведений о наличии особо охраняемых природных территорий и охраняемых видов растений и животных',
      img: 'reserves',
      btnText: 'получить сведения',
    },
    {
      title: 'Пересечение границ земельных участков',
      text: 'Получение сведений о пересечении с землями лесного фонда Московской области',
      img: 'plots',
      btnText: 'получить сведения',
    },
    {
      title: 'государственный лесной реестр',
      text: 'Выписка из государственного лесного реестра',
      img: 'maintenance',
      btnText: 'Получить выписку',
    },
    {
      title: 'государственный лесной реестр',
      text: 'Выписка из государственного лесного реестра',
      img: 'maintenance',
      imgClass: 'small',
      btnText: 'Получить выписку',
      label: {
        inputs: [
          {
            placeholder: 'Введите номер квартала',
            type: 'text'
          },
          {
            placeholder: 'Выберите лесничество',
            type: 'text'
          },
          {
            placeholder: 'Выберите участковое леснич...',
            type: 'text'
          }
        ]
      }
    },
    {
      title: 'запись на то',
      text: '',
      img: 'record',
      btnText: 'записаться',
    },
    {
      title: 'Вакцинация против covid-19',
      text: '',
      img: 'vaccination',
      btnText: 'записаться',
    }
    
  ]
  constructor() { }

  ngOnInit(): void { }

}
