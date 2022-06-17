const app = angular.module('app', []);


app.controller('carsCtrl', function ($http, $scope) {
    $scope.isUpdating=null
    $scope.isUpdatingId=null
    $http({
        method: 'get',
        url: 'http://owu.linkpc.net/api/v2/cars'
    }).then(function (response) {
        $scope.cars = response.data;
    }, function (error) {
        console.log(error, 'can not get data.');
    });

    $scope.createCar = (car) => {
        const {model, year, price} = car

        const  updCar =  {id:$scope.isUpdatingId,model:model,year: year,price: price}

        if ($scope.isUpdating) {
            $http({
                method: 'put',
                url: `http://owu.linkpc.net/api/v2/cars/${updCar.id}`,
                data: updCar
            }).then(function (response) {
                const index = $scope.cars.findIndex(value => updCar.id === value.id)
                $scope.cars.splice(index,1)
                $scope.cars.push(updCar)

            }, function (error) {
                console.log(error, 'can not get data.');
            });
            $scope.isUpdating=false
            $scope.isUpdatingId=null
        } else {
            $http({
                method: 'post',
                url: `http://owu.linkpc.net/api/v2/cars`,
                data: car
            }).then(function (response) {
                $scope.cars.push(car)
            }, function (error) {
                console.log(error, 'can not get data.');
            });
        }
        $scope.model = null;
        $scope.price = null;
        $scope.year = null;
    }

    $scope.updateCar = (car) => {
        $scope.isUpdating=true
        $scope.isUpdatingId=car.id
        $scope.model = car.model;
        $scope.price = car.price;
        $scope.year = car.year;
    }

    $scope.delCar = (car) => {

        $http({
            method: 'delete',
            url: `http://owu.linkpc.net/api/v2/cars/${car.id}`
        }).then(function (response) {
            const index = $scope.cars.findIndex(value => car.id === value.id)
            $scope.cars.splice(index, 1)
        }, function (error) {
            console.log(error, 'can not get data.');
        });
        $scope.model = null;
        $scope.price = null;
        $scope.year = null;
    }

});
