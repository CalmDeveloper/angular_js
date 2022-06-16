const app = angular.module('app',[]);

app.controller('mainCtrl', function ($scope) {
    $scope.name = 'Bob';
});


app.directive('fooBar', function () {
    return {
        restrict: 'E',
        transclude:true,
        template: 'This is my super directive <ng-transclude></ng-transclude>',
        link: function (scope, element, attrs) {
            console.log('This is my super directive');
        }
    }
});