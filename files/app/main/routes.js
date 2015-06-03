export default function routes($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main/template.html',
      controller: 'MainCtrl'
    });
}

routes.$inject = ['$routeProvider'];
