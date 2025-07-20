const app = angular.module("myApp",[]);

app.controller("myController", function($scope){
    // Proudct list
    $scope.products = ["Laptop", "Mobile", "Tablet"];

    // Add new product
    $scope.addProduct = function(){
        if($scope.newProduct && !$scope.products.includes($scope.newProduct)){
            $scope.products.push($scope.newProduct);
            $scope.newProduct = "";
        }
    }

    // Remove product
    $scope.deleteProduct = function(product){
        for(var i=0; i<$scope.products.length; i++){
            if($scope.products[i] == product){
                $scope.products.splice(i, 1);
            }
        }
    }
})