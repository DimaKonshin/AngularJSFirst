function AppStart($scope) {
    var p1 = new Point("Hello");

    $scope.message = p1.message;

    $scope.addProduct = function (productName) {
        $scope.message = productName;
    }
}