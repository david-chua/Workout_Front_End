angular.module('workout-app')
  .controller('HomeController', HomeController)
  .controller('AuthController', AuthController)
  .controller('CalendarController', CalendarController)
  .controller('WorkoutController', WorkoutController)
  .controller('WeightController', WeightController)
  .controller('CardioController', CardioController)
  .factory('AuthTokenFactory', AuthTokenFactory)
  .factory('AuthInterceptor', AuthInterceptor)
