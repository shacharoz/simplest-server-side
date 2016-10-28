angular.module('GeekService', [])
    .service('GeekService', ['$http', function($http) {

        ip='http://10.8.128.25:8080';
        
       this.status = function () {
            return $http.get(ip+'/geeks/', {cache:false});   
       }

       this.addNewObj = function (data) {
            return $http.post(ip+'/geeks', data, {cache:false});   
       }
       
        this.findObjFromDB = function (name) {
            return $http.get(ip+'/geeks/?findObj='+ name, {cache:false});   
       }
}]);