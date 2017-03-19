angular.module('workout-app',['ui.router'])
// , 'ui-calendar', 'ui-bootstrap', 'ui.boostrap.datatimepicker'
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
      tempalteUrl:'/partials/main.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/partials/sign_up.html'
    })
    .state('login',{
      url: '/login',
      templateUrl: '/partials/log_in.html'
    })
    .state('home',{
      url: '/home',
      templateUrl: '/partials/home.html'
    })
    .state('create_workout',{
      url: '/workouts/create',
      templateUrl: '/partials/create_workout.html'
    })
    .state('show_workout',{
      url: '/workouts/show',
      templateUrl: '/partials/show_workout.html'
    })
    .state('create_weight',{
      url: '/workouts/show/weight/create',
      templateUrl: '/partials/create_weight.html'
    })
  }
