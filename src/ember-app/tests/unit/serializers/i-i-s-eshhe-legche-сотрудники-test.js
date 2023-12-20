import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-eshhe-legche-сотрудники', 'Unit | Serializer | i-i-s-eshhe-legche-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-eshhe-legche-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-eshhe-legche-пол',
    'transform:i-i-s-eshhe-legche-тип-вольера',
    'transform:i-i-s-eshhe-legche-тип-корма',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
