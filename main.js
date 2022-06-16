const app = angular.module('app',[]);

app.directive('myDirective',function () {
    const bookmarks = [
        {
            id: 1,
            name: 'AngularJS'
        },
        {
            id: 2,
            name: 'EmberJS'
        },
        {
            id: 3,
            name: 'ReactJS'
        }
    ];
    return {
template: "<div ng-repeat='bookmark in myBookmarks'>{{bookmark.name}}</div>",
        link: function (scope, element, attrs) {
            scope.myBookmarks = bookmarks;
        }
    }
})
