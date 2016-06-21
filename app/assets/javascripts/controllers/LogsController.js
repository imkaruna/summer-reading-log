function LogsController($scope) {
  console.log('logs');
  $scope.logs = {
      1: {
        name: 'Sam',
        books_read: [{name: 'Book1', minutes: '10'}, {name: 'Book2', minutes: '25'}]
      },
      2: {
        name: 'Dave',
        books_read: [{name: 'Book2', minutes: '23'}, {name: 'Book4', minutes: '12'}]
      },
      3: {
        name: 'Smith',
        books_read: [{name: 'Book3', minutes: '22'}, {name: 'Book4', minutes: '11'}, {name: 'Book5', minutes: '12'}]
      },
      4: {
        name: 'Anu',
        books_read:  [{name: 'Book2', minutes: '22'}, {name: 'Book4', minutes: '33'}]
      }
    };
}

angular
    .module("summer-reading-app")
    .controller('LogsController', LogsController);
