import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  весКорма: DS.attr('string'),
  номерРациона: DS.attr('number'),
  составКорма: DS.attr('string'),
  типКорма: DS.attr('i-i-s-eshhe-legche-тип-корма'),
  сотрудники: DS.belongsTo('i-i-s-eshhe-legche-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  весКорма: {
    descriptionKey: 'models.i-i-s-eshhe-legche-рацион.validations.весКорма.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерРациона: {
    descriptionKey: 'models.i-i-s-eshhe-legche-рацион.validations.номерРациона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  составКорма: {
    descriptionKey: 'models.i-i-s-eshhe-legche-рацион.validations.составКорма.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типКорма: {
    descriptionKey: 'models.i-i-s-eshhe-legche-рацион.validations.типКорма.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-eshhe-legche-рацион.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РационE', 'i-i-s-eshhe-legche-рацион', {
    номерРациона: attr('Номер рациона', { index: 0 }),
    типКорма: attr('Тип корма', { index: 1 }),
    составКорма: attr('Состав корма', { index: 2 }),
    весКорма: attr('Вес корма', { index: 3 }),
    сотрудники: belongsTo('i-i-s-eshhe-legche-сотрудники', 'Сотрудники', {
      фамилия: attr('Ответственный', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('РационL', 'i-i-s-eshhe-legche-рацион', {
    номерРациона: attr('Номер рациона', { index: 0 }),
    типКорма: attr('Тип корма', { index: 1 }),
    составКорма: attr('Состав корма', { index: 2 }),
    весКорма: attr('Вес корма', { index: 3 }),
    сотрудники: belongsTo('i-i-s-eshhe-legche-сотрудники', 'Ответственный', {
      фамилия: attr('Ответственный', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
