angular
  .module('family-deserts')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/views/home.html'
  })
  .state('recipesIndex', {
    url: '/recipes',
    templateUrl: 'js/views/recipes/index.html',
    controller: 'recipesIndexCtrl as recipesIndex'
  })
  .state('recipesNew', {
    url: 'recipes/new',
    templateUrl: 'js/views/recipes/new.html',
    controller: 'recipesNewCtrl as recipesNew'
  })
  .state('recipesShow', {
    url: '/recipes/:id',
    templateUrl: 'js/views/recipes/show.html',
    controller: 'recipesShowCtrl as recipesShow'
  })
  .state('recipesEdit', {
    url: '/recipes/:id/edit',
    templateUrl: 'js/views/recipes/edit.html',
    controller: 'recipesEditCtrl as recipesEdit'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'js/views/auth/login.html',
    controller: 'AuthCtrl as auth'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'js/views/auth/register.html',
    controller: 'AuthCtrl as auth'
  })
  .state('profile', {
    url: '/user/:id',
    templateUrl: 'js/views/users/show.html',
    controller: 'ProfileCtrl as profile'
  })
  .state('editProfile', {
    url: '/user/:id/edit',
    templateUrl: 'js/views/users/edit.html',
    controller: 'EditCtrl as editProfile'
  });

  $urlRouterProvider.otherwise('/');

}
