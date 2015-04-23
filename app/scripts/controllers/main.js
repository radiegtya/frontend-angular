'use strict';

/**
 * @ngdoc function
 * @name frontendCmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendCmsApp
 */
angular.module('frontendCmsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
