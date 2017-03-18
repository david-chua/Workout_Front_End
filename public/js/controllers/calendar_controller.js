function CalendarController($http, uiCalendarConfig){
  // , $uibModal, $uiCalendarConfig
  var server = 'http://localhost:3000'

  this.animationsEnabled = true;
  this.events = [];
  events = this.events;
  eventSources = this.eventSources;

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  //
  // Get route to get all the workouts on the calendar.

  function getWorkouts(){
    $http.get(`${server}/users/${currentUser._id}/workouts`)
      .then(function(response){
        console.log(response.data.data)
        this.events = response.data.data
      })
  }

  this.eventSources = [this.events];

  var calendar = document.getElementById('workoutcalendar');



// Angular UI Calendar Configuration

this.uiConfig = {
  calendar: {
    height: 650,
    editable: true,
    selectable: true,
    header: {
      right: 'today yesterday,tomorrow'
    },
    views: {
      month: {
        colunFormat: 'dddd'
      }
    },
    dayClick: function(data){
      var thisDate = date;
      // modal instance service: modal directive using bootstrap
      var $uiModalInstance = $uiModal.open({
        templateUrl: 'myAddModalContent.html',
        controller: 'AddModalInstanceCtrl',
        // using uiModal to create view templates in which can be called in the HTML file
        controllerAs: 'addModal',
        resolve: {
          thisDate: thisDate
        }
      });
      console.log(date);
    },

    eventClick: function(selectedWorkout){
      this.selectedWorkout = selectedWorkout;
      console.log(selectedWorkout);
      var $uiModalInstance = $uiModal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal',
        resolve: {
          selectedWorkout: selectedWorkout
        }
      });
    },
    // triggered when dragging stops and the event has moved to a different day/time
    // fullcalendar.io/docs/event_ui/eventDrop
    eventDrop: function(selectedWorkout, delta, revertFunc, jsEvent,ui,view){
      this.selectedWorkout = selectedWorkout;
      console.log(selectedWorkout);
      console.log(selectedWorkout.start._d);
      var newDate = selectedWorkout.start._d;
      $http.put(`${server}/${currentUser._id}/workouts/${selectedWorkout.id}`)
      data: {
        start: newDate
      }
    }


    }
  }
}
