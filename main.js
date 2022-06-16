const app = angular.module('app',[])

app.controller('father',function ($scope) {
    $scope.showName =()=>{
        console.log('father')
    }
})
app.controller('first',function ($scope) {
// $scope.showName =()=>{
//     console.log('child')
// }
})
app.controller('second',function ($scope) {

})