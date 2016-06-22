function ReadersProfileController(profile, $filter) {
  var reader = this;
  reader.data = profile.data;
  reader.search = '';

	reader.refilter = function () {
		reader.filteredList = $filter('filter')(reader.data.books.genre, reader.search);
	}
  };

angular
    .module("summer-reading-app")
    .controller('ReadersProfileController', ReadersProfileController);
