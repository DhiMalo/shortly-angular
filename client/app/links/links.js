angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {

  $scope.data = {
    
  };

  $scope.getLinks = function(){
                      Links.getLinks()
                      .then(function (resp) {
                      console.log('insidegetlinks');
                      console.log('respdatalinkjs', resp.data);
                      return resp.data;
      });
                    }

  // $scope.link = {};           
  
  $scope.data.links = $scope.getLinks();

});


//$scope.data.links = UNDEFINED:

//   $scope.data = {
    
//   };

//   $scope.getLinks = function(){
//                       Links.getLinks()
//                       .then(function (resp) {
//                       console.log('insidegetlinks');
//                       console.log('respdata', resp.data);
//                       return resp.data;
//       });
//                     }

//   // $scope.link = {};           
  
//   $scope.data.links = $scope.getLinks();

// });