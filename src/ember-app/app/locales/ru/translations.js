import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISEshheLegcheВидыLForm from './forms/i-i-s-eshhe-legche-виды-l';
import IISEshheLegcheВольерLForm from './forms/i-i-s-eshhe-legche-вольер-l';
import IISEshheLegcheГрафикРаботыLForm from './forms/i-i-s-eshhe-legche-график-работы-l';
import IISEshheLegcheДолжностьLForm from './forms/i-i-s-eshhe-legche-должность-l';
import IISEshheLegcheЖивотныеLForm from './forms/i-i-s-eshhe-legche-животные-l';
import IISEshheLegcheРасписаниеLForm from './forms/i-i-s-eshhe-legche-расписание-l';
import IISEshheLegcheРационLForm from './forms/i-i-s-eshhe-legche-рацион-l';
import IISEshheLegcheСотрудникиLForm from './forms/i-i-s-eshhe-legche-сотрудники-l';
import IISEshheLegcheВидыEForm from './forms/i-i-s-eshhe-legche-виды-e';
import IISEshheLegcheВольерEForm from './forms/i-i-s-eshhe-legche-вольер-e';
import IISEshheLegcheГрафикРаботыEForm from './forms/i-i-s-eshhe-legche-график-работы-e';
import IISEshheLegcheДолжностьEForm from './forms/i-i-s-eshhe-legche-должность-e';
import IISEshheLegcheЖивотныеEForm from './forms/i-i-s-eshhe-legche-животные-e';
import IISEshheLegcheРасписаниеEForm from './forms/i-i-s-eshhe-legche-расписание-e';
import IISEshheLegcheРационEForm from './forms/i-i-s-eshhe-legche-рацион-e';
import IISEshheLegcheСотрудникиEForm from './forms/i-i-s-eshhe-legche-сотрудники-e';
import IISEshheLegcheВидыModel from './models/i-i-s-eshhe-legche-виды';
import IISEshheLegcheВольерModel from './models/i-i-s-eshhe-legche-вольер';
import IISEshheLegcheГрафикРаботыModel from './models/i-i-s-eshhe-legche-график-работы';
import IISEshheLegcheДолжностьModel from './models/i-i-s-eshhe-legche-должность';
import IISEshheLegcheЖивотныеModel from './models/i-i-s-eshhe-legche-животные';
import IISEshheLegcheРасписаниеModel from './models/i-i-s-eshhe-legche-расписание';
import IISEshheLegcheРационModel from './models/i-i-s-eshhe-legche-рацион';
import IISEshheLegcheСоставВольераModel from './models/i-i-s-eshhe-legche-состав-вольера';
import IISEshheLegcheСотрудникиModel from './models/i-i-s-eshhe-legche-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-eshhe-legche-виды': IISEshheLegcheВидыModel,
    'i-i-s-eshhe-legche-вольер': IISEshheLegcheВольерModel,
    'i-i-s-eshhe-legche-график-работы': IISEshheLegcheГрафикРаботыModel,
    'i-i-s-eshhe-legche-должность': IISEshheLegcheДолжностьModel,
    'i-i-s-eshhe-legche-животные': IISEshheLegcheЖивотныеModel,
    'i-i-s-eshhe-legche-расписание': IISEshheLegcheРасписаниеModel,
    'i-i-s-eshhe-legche-рацион': IISEshheLegcheРационModel,
    'i-i-s-eshhe-legche-состав-вольера': IISEshheLegcheСоставВольераModel,
    'i-i-s-eshhe-legche-сотрудники': IISEshheLegcheСотрудникиModel
  },

  'application-name': 'Eshhe legche',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Eshhe legche',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Eshhe legche',
          title: 'Eshhe legche'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'з-о-о-п-а-р-к': {
          caption: 'ЗООПАРК',
          title: 'ЗООПАРК',
          штат: {
            caption: 'Штат',
            title: 'Штат',
            'i-i-s-eshhe-legche-сотрудники-l': {
              caption: 'Сотрудники',
              title: ''
            },
            'i-i-s-eshhe-legche-график-работы-l': {
              caption: 'График работы',
              title: ''
            },
            'i-i-s-eshhe-legche-должность-l': {
              caption: 'Должность',
              title: ''
            }
          },
          'учет-животных': {
            caption: 'Учет животных',
            title: 'Учет животных',
            'i-i-s-eshhe-legche-животные-l': {
              caption: 'Животные',
              title: ''
            },
            'i-i-s-eshhe-legche-виды-l': {
              caption: 'Виды',
              title: ''
            }
          },
          'уход-и-кормление': {
            caption: 'Уход и кормление',
            title: 'Уход и кормление',
            'i-i-s-eshhe-legche-вольер-l': {
              caption: 'Вольер',
              title: ''
            },
            'i-i-s-eshhe-legche-расписание-l': {
              caption: 'Расписание',
              title: ''
            },
            'i-i-s-eshhe-legche-рацион-l': {
              caption: 'Рацион',
              title: ''
            }
          }
        },
        'eshhe-legche': {
          caption: 'EshheLegche',
          title: 'EshheLegche',
          'i-i-s-eshhe-legche-виды-l': {
            caption: 'Виды',
            title: ''
          },
          'i-i-s-eshhe-legche-график-работы-l': {
            caption: 'График работы',
            title: ''
          },
          'i-i-s-eshhe-legche-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-eshhe-legche-рацион-l': {
            caption: 'Рацион',
            title: ''
          },
          'i-i-s-eshhe-legche-расписание-l': {
            caption: 'Расписание',
            title: ''
          },
          'i-i-s-eshhe-legche-вольер-l': {
            caption: 'Вольер',
            title: ''
          },
          'i-i-s-eshhe-legche-животные-l': {
            caption: 'Животные',
            title: ''
          },
          'i-i-s-eshhe-legche-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-eshhe-legche-виды-l': IISEshheLegcheВидыLForm,
    'i-i-s-eshhe-legche-вольер-l': IISEshheLegcheВольерLForm,
    'i-i-s-eshhe-legche-график-работы-l': IISEshheLegcheГрафикРаботыLForm,
    'i-i-s-eshhe-legche-должность-l': IISEshheLegcheДолжностьLForm,
    'i-i-s-eshhe-legche-животные-l': IISEshheLegcheЖивотныеLForm,
    'i-i-s-eshhe-legche-расписание-l': IISEshheLegcheРасписаниеLForm,
    'i-i-s-eshhe-legche-рацион-l': IISEshheLegcheРационLForm,
    'i-i-s-eshhe-legche-сотрудники-l': IISEshheLegcheСотрудникиLForm,
    'i-i-s-eshhe-legche-виды-e': IISEshheLegcheВидыEForm,
    'i-i-s-eshhe-legche-вольер-e': IISEshheLegcheВольерEForm,
    'i-i-s-eshhe-legche-график-работы-e': IISEshheLegcheГрафикРаботыEForm,
    'i-i-s-eshhe-legche-должность-e': IISEshheLegcheДолжностьEForm,
    'i-i-s-eshhe-legche-животные-e': IISEshheLegcheЖивотныеEForm,
    'i-i-s-eshhe-legche-расписание-e': IISEshheLegcheРасписаниеEForm,
    'i-i-s-eshhe-legche-рацион-e': IISEshheLegcheРационEForm,
    'i-i-s-eshhe-legche-сотрудники-e': IISEshheLegcheСотрудникиEForm
  },

});

export default translations;
