/*jshint node:true*/
'use strict';

module.exports = function(environment, ENV) {
  if (environment === 'production') {
    ENV.APP.host = 'https://api.waxpoeticrecords.com';
  } else {
    ENV.APP.host = 'http://localhost:3000';
  }

  return ENV;
};
