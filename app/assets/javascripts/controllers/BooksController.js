function BooksController($scope, $resource, $http, Auth) {
  var ctrl = this;
  console.log('books');

  Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            return ctrl.current_user = user;
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // unauthenticated error
            console.log('not authenticated');
        });

  Book = $resource("/books/:id", {id: "@id"}, {update: {method: "PUT"}});
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
            console.log(data);
            ctrl.books = data;
          });
  };

}

angular
    .module("summer-reading-app")
    .controller('BooksController', BooksController);
