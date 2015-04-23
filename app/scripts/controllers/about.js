'use strict';

/**
 * @ngdoc function
 * @name frontendCmsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendCmsApp
 */
angular.module('frontendCmsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
