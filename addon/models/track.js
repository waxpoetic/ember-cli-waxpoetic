import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  release: DS.belongsTo('release'),
  preview: DS.attr('string')
});
