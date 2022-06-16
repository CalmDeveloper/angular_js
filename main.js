const app = angular.module('app',[]);
app.controller("myCtrl", function () {
    this.str1 = '1,25$'
    this.str2 = '$1,25'
    this.str3 = '1,25'
})

app.filter('moneyFilter', function () {
    return function (str) {
        let lastChar = str.slice(-1);
        let firstChar = str.slice(0, 1);

        if (lastChar === '$') {
            slicedPart = str.slice(0, str.length - 1);
            return '$' + slicedPart
        } else if (firstChar === '$') {
            return str;
        } else {
            return '$' + str;
        }
    }
});