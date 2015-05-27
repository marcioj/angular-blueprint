import angular from 'angular';
import setupRouter from './router';
import setupTemplates from './templates';

const app = angular.module('<%= modulePrefix %>', ['templates', 'router']);

function setupControllers() {
  Object.keys(require.entries).forEach(function(module) {
    const match = /^.*\/controllers\/(.*)/.exec(module);
    if (match) {
      const [_, controllerName] = match;
      const controller = require(module)['default'];
      app.controller(controllerName, controller);
    }
  });
}

export default function() {
  setupTemplates();
  setupControllers();
  setupRouter();

  angular.bootstrap(document, ['<%= modulePrefix %>']);
}
