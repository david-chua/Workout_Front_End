function WorkoutController($http, $state, $scope){

  console.log('WorkoutController')
  var server = "http://localhost:3000"
  var self = this;

//create a new workout for the user
  function createWorkout(workout){
      $http.post(`${server}/workouts`, {workout: workout})
      .then(function(res){
        console.log(res);

        $state.reload('home')
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


  // function getWorkouts(){
  //     $http.get(`${server}/workouts`)
  //       .then(function(res) {
  //         console.log(res.data)
  //         self.allWorkouts = res.data.workouts;
  //         console.log(self.allWorkouts)
  //       })
  //   }
  //   self.getWorkouts = getWorkouts;
  //   getWorkouts();
  //
  //   function showWorkout(workout){
  //     self.showing_workout = workout;
  //     $scope.$emit('showing_workout', self.showing_workout);
  //     $state.go('home');
  //   }
  //
  //   self.showWorkout = showWorkout


  }
