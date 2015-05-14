/**
 * Created by gurushantu on 4/27/2015.
 */
angular.module('hrms')
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'app/hrms/partials/login.html'

                }).
                when('/home', {
                    templateUrl: 'app/hrms/partials/myinfo.html'

                }).
                when('/leavelist', {
                    templateUrl: 'app/hrms/partials/leavelist.html'

                }).
                when('/myinfo', {
                    templateUrl: 'app/hrms/partials/myinfo.html'

                }).
                when('/birthdays', {
                    templateUrl: 'app/hrms/partials/birthdays.html'

                }).
                when('/holidays', {
                    templateUrl: 'app/hrms/partials/holidays.html'

                }).
                otherwise({
                    redirectTo: '/login'
                });
        }]);