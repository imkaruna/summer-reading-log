function ReadersController($resource, $http, $stateParams, $filter, Auth, ReaderService) {
  console.log('reader');
  var ctrl = this;
  ctrl.readers = [];
  ctrl.data = {
    repeatSelect: null,
    roleOptions: [
      {name: 'Teacher'},
      {name: 'Student'}
    ]
   };
  // ctrl.data = user.data;
  ReaderService.getUsers().then(function (users) {
       ctrl.readers = users.data;
  });

  Reader = $resource("/users/:id", {id: "@id"}, {update: {method: "PUT"}});
  // ctrl.readers = Reader.query();
  // ctrl.addReader = function () {
  //   console.log(ctrl.newReader);
  //   reader = Reader.save(ctrl.newReader);
  //   ctrl.readers.push(reader);
  //   ctrl.newReader = '';
  // };
  //
  ctrl.updateReader = function (reader) {
    console.log(reader);
    Reader.update(reader).$promise.then(function(){
      ReaderService.getUsers().then(function (users) {
           ctrl.readers = users.data;
      });
    });
   };
  //
  ctrl.deleteReader = function (reader) {
    Reader.delete({ id: reader.id }, function() {
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
