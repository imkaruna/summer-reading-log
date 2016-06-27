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
        $scope.user = user;
        if (user.role === 'Teacher') {
            $state.go('readers');
        }
        else {
            $state.go('books');
        }

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
