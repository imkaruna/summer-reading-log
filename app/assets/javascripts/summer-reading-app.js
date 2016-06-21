angular
  .module('summer-reading-app', ['templates','ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'books/index.html',
            controller: 'BooksController'
        })
        .when('/add_child', {
            templateUrl: 'children/new.html',
            controller: 'ChildrenController'
        })

});
