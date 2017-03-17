angular.module('workout-app',['ui.router', 'ui-calendar', 'ui-router', 'ui-bootstrap', 'ui.boostrap.datatimepicker'])
  .config(workoutRouter)
  .config(authInterceptor);


  function authInterceptor($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor')
  }

  function workoutRouter($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main', {
      url: '/',
      tempalteUrl:'/partials/main.html',
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/partials/signup.html'
    })
    .state('login',{
      url: '/login',
      templateUrl: '/partials/login.html'
    })
    .state('home',{
      url: '/home',
      template: '/partials/home.html'
    })
  }
