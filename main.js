const app = angular.module('app',[]);

app.controller('myCtrl',function ($scope) {
    $scope.name = 'Taras'
})

app.directive('myDir',function () {
    return {
        scope:true,
        template: '<div>my name is {{name}} <input type="text" ng-model="name"></div>',
        link: function () {

        }
    }
})
