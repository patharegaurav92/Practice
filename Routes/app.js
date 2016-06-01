var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
 $routeProvider
 .when('/', {
  templateUrl: 'Others/basic.html'
 })
 .when('/view/:id', {
  templateUrl: 'Others/detail.html',
  controller: 'viewController'
 })
 .otherwise({
  redirectTo: '/'
 });
})

app.controller('directoryController',['$http','$scope', function($http,$scope){
 
 $http({method:'GET',url:'emp.json'}).success(function(response){
   $scope.people=response
   });
   
}])
 app.controller('viewController',['$scope','$routeParams',function($scope,$routeParams){
  
   $scope.people=$scope.people[$routeParams.id]
   
}])