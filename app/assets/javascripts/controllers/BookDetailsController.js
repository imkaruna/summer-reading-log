function BookDetailsController(detail) {
  this.data = detail.data;
  };

angular
    .module("summer-reading-app")
    .controller('BookDetailsController', BookDetailsController);
