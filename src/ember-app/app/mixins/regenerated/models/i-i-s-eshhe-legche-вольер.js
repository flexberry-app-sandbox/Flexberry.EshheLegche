import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  площадь: DS.attr('string'),
  типВольера: DS.attr('i-i-s-eshhe-legche-тип-вольера'),
  сотрудники: DS.belongsTo('i-i-s-eshhe-legche-сотрудники', { inverse: null, async: false }),
  составВольера: DS.hasMany('i-i-s-eshhe-legche-состав-вольера', { inverse: 'вольер', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-eshhe-legche-вольер.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-eshhe-legche-вольер.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типВольера: {
    descriptionKey: 'models.i-i-s-eshhe-legche-вольер.validations.типВольера.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-eshhe-legche-вольер.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составВольера: {
    descriptionKey: 'models.i-i-s-eshhe-legche-вольер.validations.составВольера.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВольерE', 'i-i-s-eshhe-legche-вольер', {
    номер: attr('Номер', { index: 0 }),
    типВольера: attr('Тип вольера', { index: 1 }),
    площадь: attr('Площадь', { index: 2 }),
    сотрудники: belongsTo('i-i-s-eshhe-legche-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    составВольера: hasMany('i-i-s-eshhe-legche-состав-вольера', 'Состав вольера', {
      животные: belongsTo('i-i-s-eshhe-legche-животные', 'Животные', {
        кличка: attr('Кличка', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'кличка' })
    })
  });

  modelClass.defineProjection('ВольерL', 'i-i-s-eshhe-legche-вольер', {
    номер: attr('Номер', { index: 0 }),
    типВольера: attr('Тип вольера', { index: 1 }),
    площадь: attr('Площадь', { index: 2 }),
    сотрудники: belongsTo('i-i-s-eshhe-legche-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
