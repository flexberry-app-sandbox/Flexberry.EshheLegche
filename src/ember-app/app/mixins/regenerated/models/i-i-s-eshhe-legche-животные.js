import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кличка: DS.attr('string'),
  кодЖивотного: DS.attr('number'),
  пол: DS.attr('i-i-s-eshhe-legche-пол'),
  виды: DS.belongsTo('i-i-s-eshhe-legche-виды', { inverse: null, async: false })
});

export let ValidationRules = {
  кличка: {
    descriptionKey: 'models.i-i-s-eshhe-legche-животные.validations.кличка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодЖивотного: {
    descriptionKey: 'models.i-i-s-eshhe-legche-животные.validations.кодЖивотного.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-eshhe-legche-животные.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  виды: {
    descriptionKey: 'models.i-i-s-eshhe-legche-животные.validations.виды.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖивотныеE', 'i-i-s-eshhe-legche-животные', {
    кодЖивотного: attr('Код животного', { index: 0 }),
    кличка: attr('Кличка', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    виды: belongsTo('i-i-s-eshhe-legche-виды', 'Виды', {
      наименование: attr('Вид', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ЖивотныеL', 'i-i-s-eshhe-legche-животные', {
    кодЖивотного: attr('Код животного', { index: 0 }),
    кличка: attr('Кличка', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    виды: belongsTo('i-i-s-eshhe-legche-виды', 'Вид', {
      наименование: attr('Вид', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
