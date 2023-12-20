import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-eshhe-legche-вольер', 'Unit | Model | i-i-s-eshhe-legche-вольер', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-eshhe-legche-виды',
    'model:i-i-s-eshhe-legche-вольер',
    'model:i-i-s-eshhe-legche-график-работы',
    'model:i-i-s-eshhe-legche-должность',
    'model:i-i-s-eshhe-legche-животные',
    'model:i-i-s-eshhe-legche-расписание',
    'model:i-i-s-eshhe-legche-рацион',
    'model:i-i-s-eshhe-legche-состав-вольера',
    'model:i-i-s-eshhe-legche-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
