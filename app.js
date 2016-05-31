var app = angular.module("myApp", []);

app.controller("myCtrl",function($scope){
  $scope.items=["Milk", "Bread", "Cheese"];
    
$scope.addItem = function(){
    $scope.errortext = "";
    if(!$scope.aItem) {return;}
    if($scope.items.indexOf($scope.aItem) == -1){
  $scope.items.push($scope.aItem);}
 
  else {
            $scope.errortext = "The item is already in your shopping list.";
        }
  $scope.aItem="";
};

$scope.removeItem = function(index){
    $scope.errortext = "";
    $scope.items.splice(index,1);
};

});

