angular
  .module('summer-reading-app', ['templates','ui.router', 'ngResource'])
  .config(function ($stateProvider, $locationProvider, $urlRouterProvider ) {
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'main_index.html'
        })
        .state('books', {
            url: '/books',
            templateUrl: 'books/books_index.html',
            controller: 'BooksController'
        })
        .state('books.detail', {
            url: '/:id',
            templateUrl: 'books/book_details.html',
            controller: 'BookDetailsController',
            controllerAs: 'detail',
            resolve: {
              detail: function (BookService, $stateParams) {
                return BookService.getDetail($stateParams.id);
              }
        }
        })
        .state('readers', {
            url: '/readers',
            templateUrl: 'readers/readers_index.html',
            controller: 'ReadersController'
        })
        .state('readers.profile', {
            url: '/:id',
            templateUrl: 'readers/profile.html',
            controller: 'ReadersProfileController',
            controllerAs: 'reader',
            resolve: {
              profile: function (ReaderService, $stateParams) {
                return ReaderService.getProfile($stateParams.id);
              }
            }
        })
        .state('logs', {
            url: '/logs',
            templateUrl: 'logs/logs_index.html',
            controller: 'LogsController'
        });
        $urlRouterProvider.otherwise('/');
});
