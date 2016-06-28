function ReaderService($http) {
  this.getProfile = function (id) {
    result = $http.get('/users/'+id);
    return result;
  }

  this.getUsers = function() {
    result = $http.get('/users');
    return result;
  }

  this.updateUserBookStatus = function (user_id, book_id, status) {
    return $http.post('/users/'+user_id+'/update_status',{"book_id": book_id, "status": status}).success(function(data) {
      console.log('Book Status Successfully Updated!');
    });
  }
}

angular
  .module('summer-reading-app')
  .service('ReaderService', ReaderService)
