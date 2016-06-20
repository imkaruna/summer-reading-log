function BooksController($scope) {
  console.log('controller');
  $scope.books = ['Book1', 'Book2', 'Book3'];
  $scope.title = "All Books";
}

angular
    .module("summer-reading-app")
    .controller('BooksController', BooksController);
