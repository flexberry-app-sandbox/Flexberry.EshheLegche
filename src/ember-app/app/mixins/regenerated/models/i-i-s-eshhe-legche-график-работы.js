import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяНачала: DS.attr('string'),
  времяОкончания: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-eshhe-legche-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  времяНачала: {
    descriptionKey: 'models.i-i-s-eshhe-legche-график-работы.validations.времяНачала.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяОкончания: {
    descriptionKey: 'models.i-i-s-eshhe-legche-график-работы.validations.времяОкончания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-eshhe-legche-график-работы.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикРаботыE', 'i-i-s-eshhe-legche-график-работы', {
    времяНачала: attr('Время начала', { index: 0 }),
    времяОкончания: attr('Время окончания', { index: 1 }),
    должность: belongsTo('i-i-s-eshhe-legche-должность', 'Должность', {
      наименование: attr('Наименование должности', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ГрафикРаботыL', 'i-i-s-eshhe-legche-график-работы', {
    времяНачала: attr('Время начала', { index: 0 }),
    времяОкончания: attr('Время окончания', { index: 1 }),
    должность: belongsTo('i-i-s-eshhe-legche-должность', 'Наименование должности', {
      наименование: attr('Наименование должности', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
