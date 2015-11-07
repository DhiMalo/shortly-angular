angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  
  $scope.link = {};


  $scope.addLink = function(){
                        Links.addLink()
                        .then(function (data) { 
                          console.log('scopeaddlink', data);
                        // $scope.link;
        });
                      }

  // $scope.addLink();

});
