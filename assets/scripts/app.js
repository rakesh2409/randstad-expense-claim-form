'use strict';

/*  Author: Rakesh Sharma 
 *  Date: Date.now()
 Main Module
 */

(function(){
    angular.module('app', [
        'ngRoute',
        'ui.router',
        'angular-table',
        'mainControllers',
        'app.directive',
        'app.service'
    ])

    .config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
        function($httpProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: 'views/main.html',
                controller: 'mainController',
                controllerAs: 'vm'
            });

            $urlRouterProvider.otherwise('/');
    }])

})();