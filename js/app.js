/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', ['restangular', 'ngRoute'])
    .config(function ($routeProvider, RestangularProvider) {
        RestangularProvider.setDefaultHeaders({'Authorization': 'Basic dGVzdEBleGFtcGxlLmNvbTp0ZXN0'});
        RestangularProvider.setBaseUrl("http://localhost:8000");
         RestangularProvider.setResponseExtractor(function(response, operation) {
             return response.tasks ? response.tasks : response.task;
         });

        $routeProvider.when('/', {
            controller: 'TodoCtrl',
            templateUrl: 'todomvc-index.html'
        }).when('/:status', {
            controller: 'TodoCtrl',
            templateUrl: 'todomvc-index.html'
        }).otherwise({
            redirectTo: '/'
        });
    });
