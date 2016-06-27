function ReaderService($http) {
  this.getProfile = function (id) {
    result = $http.get('/users/'+id);
    return result;
  }
}

angular
  .module('summer-reading-app')
  .service('ReaderService', ReaderService)
