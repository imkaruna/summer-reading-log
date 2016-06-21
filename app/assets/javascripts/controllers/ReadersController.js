function ReadersController($scope, $resource, $http, $stateParams) {
  console.log('reader');
  Reader = $resource("/readers/:id", {id: "@id"}, {update: {method: "PUT"}});
  $scope.readers = Reader.query();
  $scope.addReader = function () {
    console.log($scope.newReader);
    reader = Reader.save($scope.newReader);
    $scope.readers.push(reader);
    $scope.newReader = '';
  };

  $scope.updateReader = function (reader) {
    $scope.refresh();
    Reader.update(reader);
  };

  $scope.deleteReader = function (reader) {
    Reader.delete({ id: reader.id }, function() {
    console.log(reader.id + ' Deleted from server');
    $scope.refresh();
  });
  };

  $scope.refresh = function(){
    $http.get('/readers')
          .success(function(data){
               $scope.readers = data;
          });
  };

}

angular
    .module("summer-reading-app")
    .controller('ReadersController', ReadersController);
