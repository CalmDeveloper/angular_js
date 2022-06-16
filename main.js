const app = angular.module('app',[]);
app.directive('myDirectiv',function () {
    return {

        // restrict: 'C',
        link:function () {
            console.log('foobar')
        }
    }
})