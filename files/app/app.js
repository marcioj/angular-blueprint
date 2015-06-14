import angular from 'angular';
import './cached_templates';

import MainCtrl from './main/controller';
import mainRoutes from './main/routes';

angular.module('<%= modulePrefix %>', ['templates', 'controllers', 'routes']);

angular.module('controllers', [])
  .controller('MainCtrl', MainCtrl);

angular.module('routes', ['ngRoute'])
  .config(mainRoutes);

export default function(element) {
  angular.bootstrap(element || document.getElementById('angular-app'), ['<%= modulePrefix %>']);
}

