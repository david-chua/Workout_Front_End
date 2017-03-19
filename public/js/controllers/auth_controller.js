function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory) {

  var self = this;
  var server = "http://localhost:3000"
  // var server = 'https://workout-api-backend.herokuapp.com'


  function signup(userPass){
    $http.post(`${server}/users`, {user: userPass})
    .then(function(response){

      $state.go('login');
    });
  }

  function login(userPass){
    $http.post(`${server}/users/login`, {user: userPass})
    .then(function(response){
      AuthTokenFactory.setToken(response.data.token)

      $scope.$emit('userLoggedIn', response.data.user);
      $rootScope.$emit('fetchData', response.data.user);
      console.log(response.data.user)
      $state.go('home');
    });
  }

  function logout(){
    AuthTokenFactory.setToken()

    $scope.$emit('userLoggedOut');
    $state.go('main');
  }


  this.signup = signup;
  this.login = login;
  this.logout = logout;
}
