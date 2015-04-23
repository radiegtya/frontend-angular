'use strict';

/**
 * @ngdoc function
 * @name frontendCmsApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the frontendCmsApp
 */
angular.module('frontendCmsApp')
        .controller('TeamsCtrl', function($scope, teams) {
            $scope.teams = [];

            function getTeams() {
                teams.get()
                        .success(function(res) {
                            console.log(res.data)
                            $scope.teams = res.data;
                        })
                        .error(function(error) {
                            console.log('Unable to load data: ' + error.message);
                        });
            }

            getTeams();
        });
