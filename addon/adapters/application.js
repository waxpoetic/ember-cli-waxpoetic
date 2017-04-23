import DS from 'ember-data';
import Ember from 'ember';

// Custom JSONAPI adapter for the Wax Poetic API
export default DS.JSONAPIAdapter.extend({
  // Set this in the host app to scope all requests by artist
  artist: null,

  // Set this in the host app to authorize non-GET requests
  token: null,

  // Converts above token configuration into HTTP headers for each request
  headers: Ember.computed(function() {
    if (!this.token) {
      return {}
    }

    return { 'Authorization': this.token }
  }),

  // Only use the "real" API when Ember env is set to 'production'
  host: Ember.computed(function() {
    if (process.env.EMBER_ENV === 'production') {
      return 'https://api.waxpoeticrecords.com'
    } else {
      return 'https://localhost:3000'
    }
  }),

  // Namespace all requests with /artists/:id if an `artist` is present
  // on this object.
  namespace: Ember.computed(function() {
    if (this.artist) {
      return `artists/${this.artist}`
    } else {
      return null
    }
  }
});
