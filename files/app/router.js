import angular from 'angular';

export default function setupRouter() {
  angular.module('router', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'index.html',
          controller: 'index'
        });

      $urlRouterProvider.otherwise('/');
    });
}
