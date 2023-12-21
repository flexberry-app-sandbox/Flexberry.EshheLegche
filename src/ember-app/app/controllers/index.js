import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.caption'),
          title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.caption'),
            title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.title'),
            children: [{
              link: 'i-i-s-eshhe-legche-сотрудники-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-eshhe-legche-сотрудники-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-eshhe-legche-сотрудники-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-eshhe-legche-график-работы-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-eshhe-legche-график-работы-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-eshhe-legche-график-работы-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-eshhe-legche-должность-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-eshhe-legche-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.штат.i-i-s-eshhe-legche-должность-l.title'),
              icon: 'table',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.caption'),
            title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.title'),
            children: [{
              link: 'i-i-s-eshhe-legche-животные-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.i-i-s-eshhe-legche-животные-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.i-i-s-eshhe-legche-животные-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-eshhe-legche-виды-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.i-i-s-eshhe-legche-виды-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.учет-животных.i-i-s-eshhe-legche-виды-l.title'),
              icon: 'archive',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.уход-и-кормление.caption'),
            title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.уход-и-кормление.title'),
            children: [{
              link: 'i-i-s-eshhe-legche-вольер-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.уход-и-кормление.i-i-s-eshhe-legche-вольер-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.уход-и-кормление.i-i-s-eshhe-legche-вольер-l.title'),
              children: null
            }, {
              link: 'i-i-s-eshhe-legche-расписание-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.уход-и-кормление.i-i-s-eshhe-legche-расписание-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.уход-и-кормление.i-i-s-eshhe-legche-расписание-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-eshhe-legche-рацион-l',
              caption: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.уход-и-кормление.i-i-s-eshhe-legche-рацион-l.caption'),
              title: i18n.t('forms.application.sitemap.з-о-о-п-а-р-к.уход-и-кормление.i-i-s-eshhe-legche-рацион-l.title'),
              icon: 'folder',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})