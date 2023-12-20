import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  второйПрием: DS.attr('string'),
  первыйПрием: DS.attr('string'),
  третийПрием: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-eshhe-legche-должность', { inverse: null, async: false }),
  рацион: DS.belongsTo('i-i-s-eshhe-legche-рацион', { inverse: null, async: false })
});

export let ValidationRules = {
  второйПрием: {
    descriptionKey: 'models.i-i-s-eshhe-legche-расписание.validations.второйПрием.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  первыйПрием: {
    descriptionKey: 'models.i-i-s-eshhe-legche-расписание.validations.первыйПрием.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  третийПрием: {
    descriptionKey: 'models.i-i-s-eshhe-legche-расписание.validations.третийПрием.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-eshhe-legche-расписание.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рацион: {
    descriptionKey: 'models.i-i-s-eshhe-legche-расписание.validations.рацион.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасписаниеE', 'i-i-s-eshhe-legche-расписание', {
    первыйПрием: attr('Первый прием', { index: 0 }),
    второйПрием: attr('Второй прием', { index: 1 }),
    третийПрием: attr('Третий прием', { index: 2 }),
    рацион: belongsTo('i-i-s-eshhe-legche-рацион', 'Рацион', {
      составКорма: attr('Состав корма', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'составКорма' }),
    должность: belongsTo('i-i-s-eshhe-legche-должность', 'Должность', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('РасписаниеL', 'i-i-s-eshhe-legche-расписание', {
    первыйПрием: attr('Первый прием', { index: 0 }),
    второйПрием: attr('Второй прием', { index: 1 }),
    третийПрием: attr('Третий прием', { index: 2 }),
    рацион: belongsTo('i-i-s-eshhe-legche-рацион', 'Состав корма', {
      составКорма: attr('Состав корма', { index: 3 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-eshhe-legche-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
