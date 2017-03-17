function HomeController($scope, $http){
  console.log('HomeController')
  var self = this;

  $scope.$on('userLoggedIn', function(event,data){
    self.currentUser = data;
    $scope.$broadcast('newLogin', self.currentUser)
  });

  $scope.$on('userLoggedOut', function(event, data){
    self.currentUser = null;
  });
}
