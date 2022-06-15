const app = angular.module('app',[]);

app.controller('first',function ($scope,myFactory) {
    $scope.hello='Hello world';
    $scope.myFactory = myFactory;
})
app.controller('second',function ($scope,myFactory) {
    $scope.hello='Hello world';
    $scope.myFactory = myFactory;
})

app.factory('myFactory',function () {


return {hello:"Taras"}
})
