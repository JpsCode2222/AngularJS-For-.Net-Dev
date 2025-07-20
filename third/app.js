const app = angular.module("myApp",[]);

app.controller("myController", function($scope){
    // Proudct list
    $scope.products = ["Laptop", "Mobile", "Tablet"];
})