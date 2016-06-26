function ReadersProfileController($scope, profile, $filter, $stateParams, $resource, $http) {
  var reader = this;
  reader.unread = true;
  Reader = $resource("/readers/:id", {id: "@id"}, {update: {method: "PUT"}});
  Book = $resource("/books/:id", {id: "@id"}, {update: {method: "PUT"}});
  reader.data = profile.data;
  reader.search = '';

	reader.refilter = function () {
		reader.filteredList = $filter('filter')(reader.data.books.genre, reader.search);
	};

  reader.allbooks = Book.query();

  reader.hasBook = function (bookId) {
    Reader.get({id:this.data.id}).$promise.then(function (user) {
      if (!user.books.map(function (book) {
        return book.id}).includes(bookId)){
          return true;
      }
      else {
        return false;
      }

    });
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
    Reader.get({id:this.data.id}).$promise.then(function (res) {
      reader.data.books = res.books;
    });
  }
  };

angular
    .module("summer-reading-app")
    .controller('ReadersProfileController', ReadersProfileController);
