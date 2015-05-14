/**
 * Created by gurushantu on 4/27/2015.
 */
angular.module('hrmsApp', ['hrms'])
    .config([function(){
        // Configuration is where you configure provider  ( Not instances )
        console.log("configuration hook");
    }])
    .run([function(){
        // Run is when app gets kicked off
        console.log("Run hook");
    }]);