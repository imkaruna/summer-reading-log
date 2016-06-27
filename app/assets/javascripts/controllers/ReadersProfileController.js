function ReadersProfileController($scope, profile, $filter, $stateParams, $resource, $http) {
  var reader = this;
  reader.userBooks = [];
  reader.unread = true;
  Reader = $resource("/users/:id", {id: "@id"}, {update: {method: "PUT"}});
  Book = $resource("/books/:id", {id: "@id"}, {update: {method: "PUT"}});

  reader.data = profile.data;

  reader.search = '';

	reader.refilter = function () {
		reader.filteredList = $filter('filter')(reader.data.books.genre, reader.search);
	};

  reader.allbooks = Book.query();

  reader.hasBook = function (bookId) {
    return reader.userBooks.includes(bookId);
  }

  reader.assignBook = function (book) {
    newBook = book;
    Reader.get({id:this.data.id}).$promise.then(function (user) {
      if (!user.books.map(function (book) {
        return book.id}).includes(newBook.id)){
        user.books.push(newBook);
        Reader.update(user);
        reader.message = "Book added to user's list!";
        reader.refresh();
      }
      else {
        console.log("Reader has read this book!");
        alert("Reader has read this book");
      }

    });
  }

  reader.refresh = function(){
    var user = this.data.id;
    Reader.get({id:this.data.id}).$promise.then(function (user) {
      reader.data.books = user.books;
      reader.userBooks = user.books.map(function (book) {
      return book.id});
    });
  }

  reader.refresh();

  };

angular
    .module("summer-reading-app")
    .controller('ReadersProfileController', ReadersProfileController);
