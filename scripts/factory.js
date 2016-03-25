var fact = angular.module('LFactory', []);
fact.factory('TodoListFactory', [function () {
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