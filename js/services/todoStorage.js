/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('todoStorage', function (Restangular) {
	var STORAGE_ID = 'todos-angularjs';
    var items = [];

	return {
		get: function () {
            return items = Restangular.all("api/v1/task").getList().$object;
		},

		put: function (todo) {
            todo.put();
		},

        post: function(todo) {
            Restangular.all('api/v1/task').post(todo);
        },

        delete: function(todo) {
            todo.remove();
        },

        update: function(todos) {
            todos.forEach(function(todo) {
                if (!_.contains(items, todo)) {
                    Restangular.all('all/v1/task').post(todo);
                } else {
                    todo.put();
                }
            });
        }
	};
});
