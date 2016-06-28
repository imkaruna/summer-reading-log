function BooksController($scope, $resource, $http, Auth, ReaderService) {
  var ctrl = this;
  console.log('books');
  Book = $resource("/books/:id", {id: "@id"}, {update: {method: "PUT"}});
  $scope.bookStatus = {
    repeatSelect: null,
    statusOptions: [
      {name: 'unread'},
      {name: 'read'}
    ]
   };

 $scope.updateStatus = function (id, book) {
   alert(book.id);
  ReaderService.updateUserBookStatus(id, book);
 }

  Auth.currentUser().then(function(user) {
            $scope.current_user = user;
            // User was logged in, or Devise returned
            // previously authenticated session.
            $scope.addBook = function () {
              reader = Book.save($scope.newBook);
              console.log($scope.newBook);
              ctrl.newBook = '';
              $scope.refresh();
              $scope.newBook = '';
            }
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // unauthenticated error
            console.log('not authenticated');
        });


  $scope.data = {
    repeatSelect: null,
    genreOptions: [
      {name: 'Science fiction'},
      {name: 'Action and Adventure'},
      {name: 'Satire'},
      {name: 'Romance'},
      {name: 'Mystery'},
      {name: 'Horror'},
      {name: 'Self help'},
      {name: 'Drama'}
    ]
   };

  $scope.books = Book.query();

  $scope.title = "All Books";

  $scope.refresh = function(){
    $http.get('/books')
          .success(function(data){
            console.log(data);
            $scope.books = data;
          });
  };

}

angular
    .module("summer-reading-app")
    .controller('BooksController', BooksController);
