import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-eshhe-legche-вольер-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-eshhe-legche-состав-вольера+животные':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'кличка',
            required: true,
            relationName: 'животные',
            projection: 'ЖивотныеL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
