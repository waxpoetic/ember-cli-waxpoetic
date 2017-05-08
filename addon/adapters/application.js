import DS from 'ember-data';
import Ember from 'ember';
import config from 'ember-get-config';

// Custom JSONAPI adapter for the Wax Poetic API
export default DS.JSONAPIAdapter.extend({
  // Set this in the host app to scope all requests by artist
  artist: null,

  // Set this in the host app to authorize non-GET requests
  token: null,

  // Set this to `true` in the host app to use local API installation
  local: false,

  // Converts above token configuration into HTTP headers for each request
  headers: Ember.computed('token,artist', function() {
    return {
      'Authorization': this.get('token'),
      'Artist': this.get('artist')
    };
  }),

  // (almost) Always use the data on api.waxpoeticrecords.com
  host: Ember.computed('local', function() {
    if (this.get('local')) {
      return 'https://api.waxpoeticrecords.com';
    } else {
      return 'http://localhost:3000';
    }
  })
});
