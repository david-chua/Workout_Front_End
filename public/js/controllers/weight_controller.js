function WeightController($http, $scope, $state, $stateParams){
  console.log('WeightController')
  var self = this;
  var server = 'http://localhost:3000';
  // var server = 'https://workout-api-backend.herokuapp.com'

// get all weight exercises of the workout
function getWeights(workoutId, weights){
  console.log('getting my lifting info')
  var workoutId = $stateParams.workoutId
  console.log(workoutId)
  $http.get(`${server}/workouts/${workoutId}/weights`)
  .then(function(response){
    console.log(response)
    console.log(response.data)
    self.allWeights = response.data;
    console.log(self.allWeights);
  })
}
self.getWeights = getWeights;
getWeights()


// create a workout
  function createWeight(workoutId, weight){
    console.log('hitting create weight');
    console.log($stateParams.workoutId)
    var workoutId = $stateParams.workoutId
    console.log(workoutId)
    console.log(weight)

    $http.post(`${server}/workouts/${workoutId}/weights`, {weight: weight})
      .then(function(response){
        console.log(response);
        console.log(response.data);
        $state.go('show_workout', {workoutId: workoutId})
      });
  }
  self.createWeight = createWeight

}
