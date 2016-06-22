function BookService($http) {
  this.getDetail = function (id) {
    result = $http.get('/books/'+id);
    return result;
  }
}

angular
  .module('summer-reading-app')
  .service('BookService', BookService)
