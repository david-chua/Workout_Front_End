function WorkoutController($http, $state, $scope){

  console.log('WorkoutController')
  // var server = "http://localhost:3000"
  var server ="https://workout-api-backend.herokuapp.com"
  var self = this;

//create a new workout for the user
  function createWorkout(workout){
      $http.post(`${server}/workouts`, {workout: workout})
      .then(function(res){
        console.log(res);

        $state.go('home')
      });
}
  self.createWorkout = createWorkout;


//get all workout of that user
  function getWorkout(){
    $http.get(`${server}/workouts`)
    .then(function(res){
      self.allWorkout = res.data.workouts;
      console.log(self.allWorkout);
    })
  }
  self.getWorkout = getWorkout;
  getWorkout();

  // show route for 1 workout_id
  function showWorkout(workout){
      self.Showing = workout;
      $scope.$emit('Showing', self.Showing);
      console.log(self.Showing);
      $state.go('show_workout');
    }
    self.showWorkout = showWorkout;

  function deleteWorkout(workout){
    $http.delete(`${server}/workouts/${workout.id}`)
    .then(function(res){
      console.log(res)
      $state.go('home')
    })
  }
  self.deleteWorkout = deleteWorkout;

  function editWorkout(workout){
    console.log('edit route hit')
    // used angular to Json
    $http.put(`${server}/workouts/${workout.id}`, angular.toJson(workout))
    .then(function(res){
      console.log(res)
      self.editForm = false;
    })
  }
  self.editWorkout = editWorkout
}
