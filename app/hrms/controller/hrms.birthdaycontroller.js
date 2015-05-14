/**
 * Created by gurushantu on 4/29/2015.
 */
angular.module('hrms')
    .controller('birthdayCtrl', ['$scope', '$http', 'apiKeyValue', function($scope, $http, apiKeyValue){
        var apiKey = apiKeyValue.getApi().akey;
        $http({method: 'GET', url: 'http://staging.hrms.synerzip.in/symfony/web/index.php/api/events/birthday', headers: {
            'api-key': apiKey}
        }).success(function(data, response){
            console.log('birthday',data);
            $scope.birthdaylists = data;

        }).error(function (data, status){
            // error message
        });
    }]);