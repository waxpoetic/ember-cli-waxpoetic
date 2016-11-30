import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  artist: DS.belongsTo('artist'),
  catalogNumber: DS.attr('string'),
  description: DS.attr('string'),
  cover: DS.attr('string'),
  tracks: DS.hasMany('track')
});
