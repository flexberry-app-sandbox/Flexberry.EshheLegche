import { Serializer as РационSerializer } from
  '../mixins/regenerated/serializers/i-i-s-eshhe-legche-рацион';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РационSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
