function ReadersController($scope) {
  console.log('reader');
  $scope.readers = [{name: 'Sam'}, {name: 'Dave'}, {name: 'Smith'}, {name: 'Anu'}];
  $scope.addReader = function () {
    console.log($scope.newReader);
    $scope.readers.push($scope.newReader);
    $scope.newReader = '';
  }
}

angular
    .module("summer-reading-app")
    .controller('ReadersController', ReadersController);
