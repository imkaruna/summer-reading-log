function NavsController($scope, Auth) {
  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;
  // debugger
    Auth.currentUser().then(function (user){
     $scope.user = user;
     console.log(user);
     $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
    });
  });
}

angular
  .module('summer-reading-app')
  .controller('NavsController', NavsController)
