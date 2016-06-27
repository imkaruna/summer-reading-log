function AuthController($scope, $state, Auth) {
  $scope.login = function() {
      Auth.login($scope.user).then(function(user){
        $state.go('/');
      });
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function(){
        $state.go('/');
      });
    };
}

angular
  .module('summer-reading-app')
  .controller('AuthController', AuthController);
