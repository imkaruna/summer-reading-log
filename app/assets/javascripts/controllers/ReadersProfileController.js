function ReadersProfileController($scope, profile, $filter, $stateParams, $resource, $http) {
  var reader = this;
  Reader = $resource("/readers/:id", {id: "@id"}, {update: {method: "PUT"}});
  Book = $resource("/books/:id", {id: "@id"}, {update: {method: "PUT"}});
  reader.data = profile.data;
  reader.search = '';

	reader.refilter = function () {
		reader.filteredList = $filter('filter')(reader.data.books.genre, reader.search);
	};

  reader.allbooks = Book.query();

  reader.assignBook = function (book) {
    newBook = book;
    userBooks = profile.data.books;
    Reader.get({id:this.data.id}).$promise.then(function (user) {
      if (!user.books.includes(newBook)){
        user.books.push(newBook);
        Reader.update(user);
      }
      else {
        console.log("Reader has read this book!");
      }

      reader.refresh();
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
