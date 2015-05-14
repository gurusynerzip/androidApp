/**
 * Created by gurushantu on 4/29/2015.
 */
angular.module('hrms')
    .controller('pHolidayCtrl', ['$scope', '$http', 'apiKeyValue', function($scope, $http, apiKeyValue){
        var apiKey = apiKeyValue.getApi().akey;
        $http({method: 'GET', url: 'http://staging.hrms.synerzip.in/symfony/web/index.php/api/events/holiday', headers: {
            'api-key': apiKey}
        }).success(function(data, status){

            $scope.pholidays = data;

        }).error(function (data, status){
            // error message
        });
    }]);