import {
  defineNamespace,
  defineProjections,
  Model as РационMixin
} from '../mixins/regenerated/models/i-i-s-eshhe-legche-рацион';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РационMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
