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
      imgName: 'gosuslugi',
      btnText: 'Проверить',
    },
    {
      title: 'Принадлежность автомобильных дорог',
      text: 'Узнайте информацию для получения технических требований и условий',
      imgName: 'highways',
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
      imgName: 'kindergarten',
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
      imgName: 'medicine',
      btnText: 'Проверить',
    },
    {
      title: 'проверка статуса очереди в 1 класс',
      text: '',
      imgName: 'first-grade',
      btnText: 'проверить',
    },
    {
      title: 'Коммунальные платежи',
      text: '',
      imgName: 'communal-pay',
      btnText: 'передать информацию',
    },
    {
      title: 'Передача информации о водителях...',
      text: '',
      imgName: 'driver',
      btnText: 'передать информацию',
    },
    {
      title: 'дистанционное консультирование',
      text: '',
      imgName: 'consultation',
      btnText: 'подробнее',
    },
    {
      title: 'Карта офисов мфц',
      text: '',
      imgName: 'mfc-map',
      btnText: 'перейти',
    },
    {
      title: 'Поиск пропавших людей',
      text: 'Сервис по поиску пропавших среди пациентов больниц Подмосковья',
      imgName: 'people-search',
      btnText: 'подробнее',
    },
    {
      title: 'Нам сверху все видно',
      text: 'Все стройки Подмосковья в твоем телефоне',
      imgName: 'construction',
      btnText: 'записаться',
    },
    {
      title: 'Предзапись в МФЦ',
      text: '',
      imgName: 'prerecording',
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
      imgName: 'reserves',
      btnText: 'получить сведения',
    },
    {
      title: 'Пересечение границ земельных участков',
      text: 'Получение сведений о пересечении с землями лесного фонда Московской области',
      imgName: 'plots',
      btnText: 'получить сведения',
    },
    {
      title: 'государственный лесной реестр',
      text: 'Выписка из государственного лесного реестра',
      imgName: 'maintenance',
      btnText: 'Получить выписку',
    },
    {
      title: 'государственный лесной реестр',
      text: 'Выписка из государственного лесного реестра',
      imgName: 'maintenance',
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
      imgName: 'record',
      btnText: 'записаться',
    },
    {
      title: 'Вакцинация против covid-19',
      text: '',
      imgName: 'vaccination',
      btnText: 'записаться',
    }
    
  ]
  constructor() { }

  ngOnInit(): void { }

}
