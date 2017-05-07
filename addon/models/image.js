import DS from 'ember-data';

export default DS.Model.extend({
  file: DS.attr('string'),
  position: DS.attr('number'),
  purpose: DS.attr('string')
});
