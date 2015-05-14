/**
 * Created by gurushantu on 4/27/2015.
 */
angular.module('hrms')
    .factory('apiKeyValue', function () {
        return ({
            apiKey : {akey: "", uName: ""},
            setApi : function (api, name) {
                this.apiKey.akey = api;
                this.apiKey.uName = name;
            },
            getApi: function(){
                return this.apiKey;
            }

        })
    });