/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var angularTemplateCache = require('./lib/angular-template-cache');

EmberApp.prototype._contentForAppBoot = function(content, config) {
  content.push('if (runningTests) {');
  content.push('  require("' + config.modulePrefix + '/tests/test-helper");');
  if (this.options.autoRun) {
    content.push('} else {');
    content.push('require("' + config.modulePrefix + '/app")["default"]();');
  }
  content.push('}');
};

EmberApp.prototype.super$contentFor = EmberApp.prototype.contentFor;

EmberApp.prototype.contentFor = function(config, match, type) {
  var content = this.super$contentFor(config, match, type);
  if (type === 'body') {
    content += '<ng-view />';
  } else if (type === 'test-body') {
    content += '<div id="angular-testing"></div>';
  }
  return content;
};

var app = new EmberApp({
  vendorFiles: {
    'ember.js': false,
    'handlebars.js': false,
    'ember-testing.js': false,
    'app-shims.js': false,
    'ember-resolver.js': false,
    'ember-load-initializers.js': false
  }
});

app.import('bower_components/angular/angular.js');
app.import('bower_components/angular-route/angular-route.js');
app.import('vendor/shims.js');

app.import('bower_components/jasmine/lib/jasmine-core/jasmine.css', { type: 'test' });
app.import('bower_components/jasmine/lib/jasmine-core/jasmine.js', { type: 'test' });
app.import('bower_components/jasmine/lib/jasmine-core/jasmine-html.js', { type: 'test' });
app.import('bower_components/jasmine/lib/jasmine-core/boot.js', { type: 'test' });

app.import('bower_components/angular-mocks/angular-mocks.js', { type: 'test' });

app.import('vendor/test-loader.js', { type: 'test' });

app.registry.add('template', {
  name: 'angular-template-cache',
  ext: 'html',
  toTree: function(tree) {
    return angularTemplateCache(tree, { name: app.name });
  }
})

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();

