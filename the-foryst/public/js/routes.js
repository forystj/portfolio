const app = angular.module('theforyst_app', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.when("/", {
    templateUrl: "../partials/home.html"
  })

  $routeProvider.when("/projects", {
    templateUrl: "../partials/projects.html"
  })

}]);
