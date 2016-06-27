function AuthController($scope, $state, Auth) {
  $scope.data = {
    repeatSelect: null,
    roleOptions: [
      {name: 'Teacher'},
      {name: 'Student'}
    ]
   };

  $scope.login = function() {
      Auth.login($scope.user).then(function(user){
        alert('ID:' + user.id);
        $scope.user = user;
        $state.go('readers');
      });
    };


    $scope.register = function() {
      Auth.register($scope.user).then(function(){

        alert('ID:' + user.id);
        $state.go('/');
      });
    };
}

angular
  .module('summer-reading-app')
  .controller('AuthController', AuthController);
