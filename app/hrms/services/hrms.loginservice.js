/**
 * Created by gurushantu on 4/27/2015.
 */
angular.module('hrms')
    .factory('loginFactory', [ 'base64', function(base64){
        return ({
            encodedData: {uname: "", password:""},
            convertBase64 : function(name, pass){
                this.encodedData.uname = base64.encode(name);
                this.encodedData.password = base64.encode(pass);
            }
        })
    }]);