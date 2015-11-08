angular.module('shortly.shorten', []) 

.controller('ShortenController', function ($scope, $location, Links) {
  
  $scope.link = {}; // We establish the $scope.link variable, assign an object and pass that object our methods from the "factory" (in services.js).

  $scope.addLink = function(){
                        console.log('scopelink:', $scope.link);
                        Links.addLink($scope.link)
                        .then(function (data) { 
                          console.log('scopeaddlink', data);
                        });
  }

});
