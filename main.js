const app = angular.module('app',[]);

app.directive('myDir', function () {
    const bookmarks = [
        {name: 'nodeJs'},
        {name: 'Html'},
        {name: 'css'}
    ]
    return {
        restrict: 'E',
        templateUrl: 'bookmarks.html',
        link: function (scope, element, attrs) {
            scope.bookmarks = bookmarks
        }
    }
})