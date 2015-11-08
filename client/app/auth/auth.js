// Added updates.

//This Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        if (token){   // Added a condition: If a token exists,
          console.log('You are logged in.');  // ...we log to the console that the user is logged in.
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        } else {  // If not, we have gated the condition so that without token, the user cannot visit the links shortener page or see their myShortener page.  They are instead redirected to "signup".
          console.log('This user account has not yet been established. ')
          $location.path('/signup');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});

