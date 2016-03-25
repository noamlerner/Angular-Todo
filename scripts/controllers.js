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