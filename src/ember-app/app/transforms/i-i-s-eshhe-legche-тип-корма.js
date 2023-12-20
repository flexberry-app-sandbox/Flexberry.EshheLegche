import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипКормаEnum from '../enums/i-i-s-eshhe-legche-тип-корма';

export default FlexberryEnum.extend({
  enum: ТипКормаEnum,
  sourceType: 'IIS.EshheLegche.ТипКорма'
});
