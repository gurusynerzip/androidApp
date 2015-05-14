/**
 * Created by gurushantu on 4/27/2015.
 */
angular.module('hrms')
.controller('loginCtrl', ['$scope', '$http','$location','loginFactory', 'apiKeyValue', function ($scope, $http, $location, loginFactory, apiKeyValue) {

    $scope.submit = function(){
        if(angular.isUndefined($scope.uname)  || angular.isUndefined($scope.passwd)){
            $location.path("/login");
            console.log('True');
        } else {
            loginFactory.convertBase64($scope.uname, $scope.passwd);
            var encodedUname = loginFactory.encodedData.uname;
            var encodedPassword = loginFactory.encodedData.password;

            $http({method: 'GET', url: 'http://staging.hrms.synerzip.in/symfony/web/index.php/api/loginapi', headers: {
                'user-id': encodedUname, 'password': encodedPassword }
            }).success(function(data, response){
                if(data["response"] === 'success'){
                    apiKeyValue.setApi(data["api-key"], $scope.uname);
                    $location.path("/home");
                    console.log('LoggedIn');
                } else {
                    console.log('Not LoggedIn');
                    $location.path("/login");
                    $('#loginForm #error').text("Invalide Username or Password").show();
                }

            }).error(function (data, status, headers) {
                // error message
            });
        }
        return false;
    }

}]);