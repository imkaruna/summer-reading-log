function LogsController($scope) {
  console.log('logs');
  $scope.logs = {
      1: {
        name: 'Sam',
        books_read: ['Book1', 'Book2']
      },
      2: {
        name: 'Dave',
        books_read: ['Book2', 'Book4']
      },
      3: {
        name: 'Smith',
        books_read: ['Book3', 'Book4', 'Book5']
      },
      4: {
        name: 'Anu',
        books_read:  ['Book2', 'Book4']
      }
    };
}

angular
    .module("summer-reading-app")
    .controller('LogsController', LogsController);
