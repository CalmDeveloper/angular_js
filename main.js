const app = angular.module('app',[]);

app.controller('myCtrl', function ($scope) {
$scope.posts=[
    {name:'post1'},
    {name:'post2'},
    {name:'post3'},
    {name:'post4'},
    {name:'post5'},
]
   $scope.getPosts =()=>{
    return $scope.posts
   }
})

app.directive('myDir',function () {
    return {
        scope: false,
        template: '<div ng-repeat="post in getPosts()">{{post.name}}</div>',
        link: function (scope,element,attrs) {

        }
    }
})
