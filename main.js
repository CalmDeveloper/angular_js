const app = angular.module('app',[]);

app.controller('father',function ($scope) {
    this.username = 'Taras'
    $scope.father = this
})
app.controller('first',function () {
this.username = 'petro'
    this.getSecondName = ()=>{
    return 'Ivanovuch'
    }
})
app.controller('second',function () {
    this.username = 'Oleg'
})