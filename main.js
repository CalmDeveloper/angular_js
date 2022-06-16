const app = angular.module('app',[]);

app.controller('myCtrl',function ($scope,myFactory) {
$scope.name='Taras'
    $scope.myFactory=myFactory
    $scope.getName = ()=>{
        $scope.name = 'lol'
    }
})

app.factory('myFactory',function () {
return {
    hello:()=>{
        return 'Oleg'
    }
}
})