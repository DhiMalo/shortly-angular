angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {

  // Instantiating the "Links" factory's "getLinks" function.  We can use it to assign a new property on the data.
  // First we create the $scope.data variable.  Now, a property on that object can holds the result of this function's execution.

  $scope.data = {}; 

  $scope.getLinks = function(){
        Links.getLinks()
        .then(function (data) {  // Lines 13-15 will allow asynchronous data to be populated via a 'promise' (hence the ".then" method.                   
          $scope.data.links = data;
          console.log('data.links:',$scope.data.links);
    });
  }

  $scope.getLinks();

}); 
