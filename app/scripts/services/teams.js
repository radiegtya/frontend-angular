'use strict';

/**
 * @ngdoc service
 * @name frontendCmsApp.teams
 * @description
 * # teams
 * Factory in the frontendCmsApp.
 */
angular.module('frontendCmsApp')
        .factory('teams', function($http) {
            var urlBase = 'http://piyiku.biz:3013/api/v1/teams';

            // Public API here
            return {
                get: function() {
                    return $http.get(urlBase);
                }
            };
        });
