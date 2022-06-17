const app = angular.module('app',[]);


app.controller('mainCtrl', function($http, $scope) {
    $http({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(function (response) {
        $scope.users= response.data;
    },function (error){
        console.log(error, 'can not get data.');
    });

    $scope.getDetails =(id)=> {
       let userId = id.id
        $http({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/users/${userId}`
    }).then(function (response) {
      return   $scope.userDetails= response.data;
    },function (error){
        console.log(error, 'can not get data.');
    });}
});
