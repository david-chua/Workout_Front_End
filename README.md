Technologies Used:

Rails
Ruby
Node
Express
Angularjs
HTML/CSS


User Stories:

As a user, I want to:
   - Sign up for an account if I'm a new user
   - Log in to my account
   - Have my own show individual page.
   - Be able to add a workout
   - Be able to delete a workout
   - Be able to edit a workout name
   - Be able to set a workout to a certain date
   - Be able to edit a workout date
   - Be able to add exercises in my workout
   - Be able to add in the reps, and sets.
   - Be able to edit the reps and set
   - Be able to delete that exercise.
   - Sign out of my account when I'm done looking at it.


Models:

Entities

User = {
 username: String,
 email: String,
 phone: String,
 password: Encrypted
 }


 Workout = {
  Title: String,
  Exercise: {Exercise Array}
  Date: Date
  User_id: (referring to user)
  }

Exercise = {
  Exercise_name: String,
  Sets: Integer,
  Reps: Integer,
  Weight: String + lbs,
  Workout_id: Integer (referring to workout model)
}


Project Challenges:
The first two models (user and workouts) were a lot simpler to do. It was when I needed to get the id of the workouts to use for the third model that was the problem. I was having such a hard time trying to get the ID to go to the third model. Besides that, I think the other challenge I had was showing the third model. It turns outs that I was just not running the code when the page loads so it made it would have never ran.

Final thoughts:
I still want to expand the project. Complete the edit and delete for the exercise and add a cardio model in. Then eventually, I really want to be able to put it in a calendar to have the drag and drop functionality as well as have the workouts be organize by date. 
