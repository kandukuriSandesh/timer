Time taken for a task can easily be calculated using this package.

startTimer is a function which should be called to initiate timer.

endTimer is a function is called to end the timer which return the timerObj which consist of information about hours, minutes,seconds and milisenconds between start and end of the timer.

Argument of type Number can be passed into endTimer Function which limits the seconds decimal points,if no argument is provided, by default seconds are limited to 2 decimal points

Example:-  endTimer(3) , Here endTimer returns seconds with 3 decimal points