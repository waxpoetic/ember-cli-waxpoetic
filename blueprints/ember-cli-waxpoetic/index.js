/*jshint node:true*/
module.exports = {
  description: 'Installs configuration for ember-cli-waxpoetic',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }


  afterInstall: function(options) {
    this.addBowerPackageToProject('bourbon', '4.2.7');
    this.addBowerPackageToProject('neat', '1.8.0');
    require('child_process').spawn('bitters install --path=app/styles');
  }
};
