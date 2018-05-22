var app = angular.module("app", []);

app.controller("appController", function ($scope) {
    var p1 = new Point("Hello");
    p1.showMessage();

    $scope.message = p1.message;

    $scope.addProduct = function (productName) {
        $scope.message = productName;
    }
});