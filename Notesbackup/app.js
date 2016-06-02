var app=angular.module('myNoteApp',['ngRoute'])

app.config(function($routeProvider){
 $routeProvider
 .when('/', {
  templateUrl: 'Others/basic.html'
 })
 .when('/view/:id',{
     templateUrl: 'Others/more.html',
     controller  : 'mainViewController'
 })
 
}) 

app.controller('noteController',['$http','$scope',function($http,$scope){
    $http({method:'GET',url:'notes.json'}).success(function(response){
    $scope.notes=response;
    });
}]);

app.controller('mainViewController',['$scope','$routeParams',function($scope,$routeParams){
  
   $scope.notes=$scope.notes[$routeParams.id]
   
}])
    
       
