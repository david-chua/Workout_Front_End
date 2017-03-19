function WorkoutController($http, $state, $scope){

  console.log('WorkoutController')
  var server = "http://localhost:3000"
  var self = this;


  function createWorkout(workout){
      $http.post(`${server}/workouts`, {workout: workout})
      .then(function(res){
        console.log(res);

        $state.go('home')
      });
}
  self.createWorkout = createWorkout;


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
