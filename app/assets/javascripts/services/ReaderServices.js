function ReaderService($http) {
  this.getProfile = function (id) {
    result = $http.get('/readers/'+id);
    return result;
  }
}

angular
  .module('summer-reading-app')
  .service('ReaderService', ReaderService)
