function NavsController($state, $scope, Auth, $location) {
  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;
  // debugger


  Auth.currentUser().then(function(user) {
            $scope.$on('devise:login', function (e, user){
              return  $scope.user = user;
              });
            $scope.$on('devise:new-registration', function (e, user){
              return  $scope.user = user;
              });
            $scope.$on('devise:logout', function (e, user){
              return  $scope.user = {};
              });

            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // unauthenticated error
            console.log('not authenticated');
        });
}

angular
  .module('summer-reading-app')
  .controller('NavsController', NavsController)
