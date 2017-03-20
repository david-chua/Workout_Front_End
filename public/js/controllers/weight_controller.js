function WeightController($http, $scope, $state, $stateParams){
  console.log('WeightController')
  var self = this;
  var server = 'http://localhost:3000';


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
    console.log(weight)
    $http.post(`${server}/workouts/${workoutId}/weights`, {workoutId: $stateParams.workoutId, weight: weight})
      .then(function(response){
        console.log(response);
        $state.go('show_workout', {test: 1})
      });
  }
  self.createWeight = createWeight

}
