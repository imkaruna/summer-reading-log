function ReadersController($scope,$resource, $http, $stateParams, $filter, Auth, ReaderService) {
  console.log('reader');
  var ctrl = this;

  ctrl.current_user = "";
  ctrl.readers = [];
  ctrl.data = {
    repeatSelect: null,
    roleOptions: [
      {name: 'Teacher'},
      {name: 'Student'}
    ]
   };

   Auth.currentUser().then(function(user) {
             // User was logged in, or Devise returned
             // previously authenticated session.
             ctrl.current_user = user;
             console.log(user); // => {id: 1, ect: '...'}
         }, function(error) {
             // unauthenticated error
             console.log('not authenticated');
         });

  ReaderService.getUsers().then(function (users) {
       ctrl.readers = users.data;
  });

  User = $resource("/users/:id", {id: "@id"}, {update: {method: "PUT"}});
  // ctrl.readers = Reader.query();
  ctrl.addReader = function () {
    console.log($scope.newUser);
    alert('in addreader');
    Auth.register($scope.newUser).then(function(data){
      alert('ID:' + data.id);
      console.log(data);
      ctrl.readers.push(data);
      $scope.newUser = '';
    //   $state.go('/');
    });
  };
  //
  ctrl.updateReader = function (reader) {
    console.log(reader);
    User.update(reader).$promise.then(function(){
      ReaderService.getUsers().then(function (users) {
           ctrl.readers = users.data;
      });
    });
   };
  //
  ctrl.deleteReader = function (reader) {
    User.delete({ id: reader.id }, function() {
    console.log('Reader '+ reader.id + ' Deleted from server');
    ctrl.refresh();
  });
  };
  //
  ctrl.refresh = function(){
    $http.get('/users')
          .success(function(data){
               ctrl.readers = data;
          });
  };
  //

}

angular
    .module("summer-reading-app")
    .controller('ReadersController', ReadersController);
