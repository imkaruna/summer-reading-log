function BooksController($scope) {
  console.log('books');
  $scope.books = [
    {
      name: 'Book1',
      author: 'John Smith'
    },
    {
      name: 'Book2',
      author: 'Adam Sandy'
    },
    {
      name: 'Book3',
      author: 'Ben Stilo'
    }
  ];
  $scope.title = "All Books";
  $scope.addBook = function () {
    $scope.books.push($scope.newBook);
    $scope.newBook = '';
  }

}

angular
    .module("summer-reading-app")
    .controller('BooksController', BooksController);
