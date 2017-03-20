function WeightController($http, $scope, $state, $stateParams){
  console.log('WeightController')
  var self = this;
  // var server = 'http://localhost:3000';
  var server = 'https://workout-api-backend.herokuapp.com'


  // function getWorkoutandWeights(){
  //   $http.get(`${server}/workouts/${id}`)
  //   .then(function(response){
  //     self.oneWorkout = response.data.workout;
  //     self.workoutWeights = response.data.weights;
  //   });
  // }
  // self.getWorkoutandWeights = getWorkoutandWeights


  function createWeight(workoutId, weight){
    console.log('hitting create weight');
    console.log($stateParams.workoutId)
    var workoutId = $stateParams.workoutId
    console.log(workoutId)
    console.log(weight)

    $http.post(`${server}/workouts/${workoutId}/weights`, {weight: weight})
      .then(function(response){
        console.log(response);
        $state.go('show_workout')
      });
  }
  self.createWeight = createWeight

}
