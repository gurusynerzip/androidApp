/**
 * Created by gurushantu on 4/29/2015.
 */
angular.module('hrms')
    .filter('dateFormat', function(){
        return function (cdate){
            condate = cdate.split("-");
            return condate[2]+"/"+condate[1]+"/"+condate[0];
        }
    });