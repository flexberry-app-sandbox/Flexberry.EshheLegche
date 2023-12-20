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
          caption: i18n.t('forms.application.sitemap.eshhe-legche.caption'),
          title: i18n.t('forms.application.sitemap.eshhe-legche.title'),
          children: [{
            link: 'i-i-s-eshhe-legche-виды-l',
            caption: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-виды-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-виды-l.title'),
            children: null
          }, {
            link: 'i-i-s-eshhe-legche-график-работы-l',
            caption: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-график-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-график-работы-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-eshhe-legche-должность-l',
            caption: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-должность-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-eshhe-legche-рацион-l',
            caption: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-рацион-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-рацион-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-eshhe-legche-расписание-l',
            caption: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-расписание-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-расписание-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-eshhe-legche-вольер-l',
            caption: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-вольер-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-вольер-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-eshhe-legche-животные-l',
            caption: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-животные-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-животные-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-eshhe-legche-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.eshhe-legche.i-i-s-eshhe-legche-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})