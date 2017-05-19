import DS from 'ember-data';
import Ember from 'ember';
import config from 'ember-get-config';

// Custom JSONAPI adapter for the Wax Poetic API
export default DS.JSONAPIAdapter.extend({
  // Set this in the host app to scope all requests by artist
  artist: null,

  // Set this in the host app to authorize non-GET requests
  token: null,

  // Converts above token configuration into HTTP headers for each request
  headers: Ember.computed('token,artist', function() {
    return {
      'Authorization': this.get('token'),
      'Artist': this.get('artist')
    };
  }),

  // Only use the "real" API when Ember env is set to 'production'
  host: Ember.computed('config.environment', function() {
    if (config.environment === 'production') {
      return 'https://api.waxpoeticrecords.com';
    } else {
      return 'http://waxpoetic.dev';
    }
  })
});
