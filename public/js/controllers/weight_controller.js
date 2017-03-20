function WeightController($http, $scope, $state, $stateParams){
  console.log('WeightController')
  var self = this;
  var server = 'http://localhost:3000';


  function getWorkoutandWeights(){
    var id = $stateParams.id;
    console.log($stateParams.id)
    $http.get(`${server}/workouts/${id}`)
    .then(function(response){
      self.oneWorkout = response.data.workout;
      self.workoutWeights = response.data.weights;
    });
  }
  self.getWorkoutandWeights = getWorkoutandWeights


  function createWeight(id, weight){
    var id = $stateParams.id;
    $http.get(`${server}/workouts/${id}/weights`, {weight: weight})
      .then(function(response){
        console.log(response);
        $state.go('show_workout')
      });
  }
  self.createWeight = createWeight

}
