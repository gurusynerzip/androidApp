/**
 * Created by gurushantu on 4/29/2015.
 */
angular.module('hrms')
    .controller('myInfoCtrl', ['$scope', '$http', 'apiKeyValue', function($scope, $http, apiKeyValue){
        var apiKey = apiKeyValue.getApi().akey;
        $http({method: 'GET', url: 'http://staging.hrms.synerzip.in/symfony/web/index.php/api/myinfo', headers: {
            'api-key': apiKey}
        }).success(function(data, status){
            $scope.empId =  data["employeeId"];
            $scope.fullName = data["name"];
            if(data["gender"] == 1){
                gender = "Male";
            } else {
                gender = "Female";
            }
            $scope.gender = gender;
            $scope.emailId = data["email"];
            $scope.contactNo = data["contact"];
            $scope.skypeId = data["skype"];
            $scope.birthDate = data["birthday"];

        }).error(function (data, status){
            // error message
        });

    }]);