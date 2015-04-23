'use strict';

/**
 * @ngdoc overview
 * @name frontendCmsApp
 * @description
 * # frontendCmsApp
 *
 * Main module of the application.
 */
angular
  .module('frontendCmsApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
