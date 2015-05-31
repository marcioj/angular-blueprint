import angular from 'angular';
import setupTemplates from './templates';
import { camelize, classify } from './inflection';

const app = angular.module('<%= modulePrefix %>', ['ui.router', 'templates']);

function setupControllers() {
  Object.keys(require.entries).forEach(function(module) {
    const match = /^.*\/controllers\/(.*)/.exec(module);
    if (match) {
      const controllerName = classify(match.pop());
      const controller = require(module)['default'];
      app.controller(controllerName, controller);
    }
  });
}

function setupDirectives() {
  Object.keys(require.entries).forEach(function(module) {
    const match = /^.*\/directives\/(.*)/.exec(module);
    if (match) {
      let directiveName = camelize(match.pop());
      let directive = require(module)['default'];
      app.directive(directiveName, directive);
    }
  });
}

function setupConfigs() {
  Object.keys(require.entries).forEach(function(module) {
    const match = /^.*\/configs\/(.*)/.exec(module);
    if (match) {
      let config = require(module)['default'];
      app.config(config);
    }
  });
}

export default function() {
  setupTemplates();
  setupControllers();
  setupConfigs();
  setupDirectives();

  angular.bootstrap(document, ['<%= modulePrefix %>']);
}
