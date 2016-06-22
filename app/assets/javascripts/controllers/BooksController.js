function BooksController($scope, $resource, $http) {
  var ctrl = this;
  console.log('books');
  Book = $resource("/books/:id", {id: "@id"}, {update: {method: "PUT"}});
  $scope.books = Book.query();
  $scope.title = "All Books";
  $scope.addBook = function () {
    reader = Book.save($scope.newBook);
    console.log($scope.newBook);
    ctrl.newBook = '';
    $scope.refresh();
    $scope.newBook = '';
  }
  $scope.refresh = function(){
    $http.get('/books')
          .success(function(data){
               ctrl.books = data;
          });
  };

}

angular
    .module("summer-reading-app")
    .controller('BooksController', BooksController);
