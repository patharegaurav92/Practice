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
 .when('/edit/:index',{
     templateUrl: 'Others/edit.html',
     controller  : 'mainEditController'
 })
 .when('/add',{
     templateUrl: 'Others/add.html',
 })
 
}) 

app.controller('noteController',['$http','$scope',function($http,$scope){
    //$http({method:'GET',url:'notes.json'}).success(function(response){
    //$scope.notes=response;
    //});
    
    $scope.refresh=function(){
    $http.get('/notes').success(function(response){
        console.log("I got the data i requested");
        $scope.notes=response;
        
    })};
    $scope.refresh();
    
    
    
    $scope.addNote=function(noteheading,notedescription){
        $scope.note={};
        $scope.note.noteheading=noteheading;
        $scope.note.notedescription=notedescription;
        console.log($scope.note);
        
        $http.post('/addnotes',$scope.note).success(function(response){
            console.log("Response");
            $scope.refresh();
            $scope.note={};
        });
    }
    $scope.editNote=function(id,notes){
        console.log(id);
        $http.put('/editNote/'+id,notes).success(function(response){
            console.log("Response");
            $scope.refresh();
        })
        }
        
    
    $scope.remove=function(id){
        console.log(id);
        $http.delete('/deletenote/'+id).success(function(response){
            console.log('Response');
            $scope.refresh();
        })}
    $scope.deleteAll=function(){
        $http.delete('/deleteAll').success(function(response){
            $scope.refresh();
        })
       
    }    
}]);



app.controller('mainViewController',['$scope','$routeParams',function($scope,$routeParams){
  
   $scope.notes=$scope.notes[$routeParams.id];
   $scope.noteId=$routeParams.id;
   
}])
    
app.controller('mainEditController',['$scope','$routeParams',function($scope,$routeParams){
    $scope.notes=$scope.notes[$routeParams.index];
    
    
}])       
app.controller('mainAddController',['$http','$scope','$routeParams',function($http,$scope,$routeParams){
    
    
    
}])