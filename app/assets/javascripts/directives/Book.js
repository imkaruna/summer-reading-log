function Book() {
	return {
		scope: {
      currentuserid: '=',
      id: '=',
			name: '=',
			author: '=',
			genre: '=',
      status: '='
		},
		template: [
			'<div class = "books-display">',
				'<label>Name: </label>',
				'<a ui-sref = "books.detail({id: id})">{{ name }} </a><br>',
				'<label>Author: </label>',
				'{{ author }} <br>',
				'<label>Genre: </label>',
				'{{ genre }} <br>',
        '<label>Status: </label>',
				'<select class="form-control" name="repeatSelect" id="repeatSelect" ng-model="status" ng-change="updateStatus({{currentuserid}},{{id}})">',
        ' <option  ng-repeat="option in bookStatus.statusOptions" value="{{option.name}}">{{option.name}}</option>',
        '</select>',
			'</div>'
		].join(''),
    controller: function($scope,ReaderService){
      $scope.bookStatus = {
        repeatSelect: null,
        statusOptions: [
          {name: 'unread'},
          {name: 'read'}
        ]
      };
       $scope.updateStatus = function (user_id, book_id, status) {
        //  console.log(this);
        // alert(this.status);
        ReaderService.updateUserBookStatus(user_id, book_id, this.status);
       }
    },
		restrict: 'E'
	};
}

angular
	.module('summer-reading-app')
	.directive('book', Book);
