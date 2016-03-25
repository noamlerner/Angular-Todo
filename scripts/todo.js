var todo = angular.module('TODO', ['ngRoute']);
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

todo.controller('TodoCtrl', ['$scope','$location', 'TodoListFactory', 
	function ($scope,$location, todoListFactory) {
		$scope.list = todoListFactory.getList();
		$scope.editTask = function(index){
			todoListFactory.index = index;
		}
		$scope.addTask= function(){
			$scope.list.push({
				task:'',
				completed:false
			});
			todoListFactory.index = $scope.list.length -1;
			 $location.path('/task');
		}
}]);
todo.controller('TaskCtrl', ['$scope', '$location', 'TodoListFactory', 
	function ($scope, $location, todoListFactory) {
		$scope.task = todoListFactory.getList()[todoListFactory.index];
		$scope.goBack = function(){
			$location.path('/list')
		}
}])
todo.factory('TodoListFactory', [function () {
	var list = [
		{
			task:'Make todo list',
			completed:false
		},
		{
			task:'Add time features',
			completed:false
		}
	];

	return {
		getList:function(){
			return list;
		},
		addTask:function(task){
			list.push(task);
		},
		index:0
	};
}]);