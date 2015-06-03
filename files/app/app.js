import angular from 'angular';
import setupTemplates from './templates';

import MainCtrl from './main/controller';
import mainRoutes from './main/routes';

angular.module('<%= modulePrefix %>', ['templates', 'controllers', 'routes']);

angular.module('controllers', [])
  .controller('MainCtrl', MainCtrl);

angular.module('routes', ['ngRoute'])
  .config(mainRoutes);

export default function() {
  setupTemplates();
  angular.bootstrap(document, ['<%= modulePrefix %>']);
}

