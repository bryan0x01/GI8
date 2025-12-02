const exercise = (exerciseName) => () => `Today's exercise: ${exerciseName}`;

console.log(exercise("Running")());
console.log(exercise("Swimming")());
console.log(exercise("Dancing")());
console.log(exercise("Fencing")());