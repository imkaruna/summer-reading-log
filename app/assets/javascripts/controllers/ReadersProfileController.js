function ReadersProfileController(profile) {
  var reader = this;
  reader.data = profile.data;
  };

angular
    .module("summer-reading-app")
    .controller('ReadersProfileController', ReadersProfileController);
