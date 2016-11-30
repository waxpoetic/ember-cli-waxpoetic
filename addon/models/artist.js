import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  photo: DS.attr('string'),
  releases: DS.hasMany('release')
});
