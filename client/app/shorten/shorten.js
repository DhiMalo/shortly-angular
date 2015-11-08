angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  
  $scope.link = {};


  $scope.addLink = function(){
                        console.log('scopelink:', $scope.link);
                        Links.addLink($scope.link)
                        .then(function (data) { 
                          console.log('scopeaddlink', data);
                        // $scope.link;
        });
                      }

  // $scope.addLink();

});
