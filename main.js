const app = angular.module('app',[]);
app.run(function ($templateCache) {
    $templateCache.put('bookmarks.html', "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>");
});
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