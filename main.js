const app = angular.module('app',[]);

app.controller('myCtrl',function ($scope) {
    $scope.name = 'Taras'
    $scope.reverse=()=>{
$scope.name = $scope.name.split('').reverse().join('')
    }

})

app.directive('myDir',function () {
    return {
        scope:{
            name:'@',
            // name:'=',
            reverse: '&'
        },
        template:'<div>{{name}}</div><div><input type="text" ng-model="name"> <button ng-click="reverse()">changeDirname</button></div>',
        link: function () {

        }
    }
})