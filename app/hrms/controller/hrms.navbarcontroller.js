/**
 * Created by gurushantu on 4/27/2015.
 */
angular.module('hrms')
.controller('navCtrl', ['$scope', '$http', 'apiKeyValue', function ($scope, $http, apiKeyValue) {
    var caKey = apiKeyValue.getApi();
    $scope.logedinUser = caKey.uName;

}]);