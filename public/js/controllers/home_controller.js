function HomeController($scope, $http, $state){
  console.log('HomeController')
  var self = this;

  $scope.$on('userLoggedIn', function(event,data){
    self.currentUser = data;
    console.log(data)
    $scope.$broadcast('newLogin', self.currentUser)
  });

  $scope.$on('userLoggedOut', function(event, data){
    self.currentUser = null;
  });

  $scope.$on('Showing', function(event,data){
    self.Showing = data;
  });

}
