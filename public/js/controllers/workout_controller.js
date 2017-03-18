function WorkoutController($http, $uibModalInstance, thisDate){
  //thisDate from Calendar Controller
  console.log('WorkoutController')
  var server = "http://localhost:3000"
  this.addEventData = {};
  this.events = [];
  this.thisDate = thisDate.format('MMMM Do')

  function NewWorkout(){
    $http.post(`${server}/users/${currentUser._id}/workouts`)
      .then(function(response){
        console.log(response.data);
        events.push(response.data);
        this.addEventData = {};
        eventSources = [events];
      }.bind(this));
    }
  }
