export default function setupRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'index.html',
      controller: 'IndexController'
    });

  $urlRouterProvider.otherwise('/');
}
