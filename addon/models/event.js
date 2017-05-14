import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  startsAt: DS.attr('date'),
  openAt: DS.attr('date'),
  ticketUrl: DS.attr('string'),
  facebookUrl: DS.attr('string'),
  image: DS.attr('string'),

  artist: DS.belongsTo('Artist')
});
