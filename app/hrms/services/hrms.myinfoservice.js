/**
 * Created by gurushantu on 4/29/2015.
 */
angular.module('hrms')
    .factory('myInfoFactory', function(){
    var info = {};
    return ({

        setInfo : function(data){
            this.info = data;
        },
        getInfo : function(){
            return info;
        }
    })
    });