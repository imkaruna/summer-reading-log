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
        .state('readers', {
            url: '/readers',
            templateUrl: 'readers/readers_index.html',
            controller: 'ReadersController'
        })
        .state('readers.profile', {
            url: '/:id/profile',
            templateUrl: 'readers/profile.html',
            controller: 'ReadersController'
        })
        .state('logs', {
            url: 'readers/logs',
            templateUrl: 'logs/logs_index.html',
            controller: 'LogsController'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

});
