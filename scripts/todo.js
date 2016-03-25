var todo = angular.module('TODO', ['ngRoute','TodoCtrls']);
todo.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: './partials/list.html',
        controller: 'TodoCtrl'
      }).
      when('/task',{
      	templateUrl:'./partials/task.html',
      	controller:'TaskCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
}]);