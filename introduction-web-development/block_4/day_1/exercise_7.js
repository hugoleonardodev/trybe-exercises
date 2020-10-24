//Turns a numerical grade into a letter grade. A >= 90, B >= 80, ...

let grade = 65;

if ( grade < 0 || grade > 100 ) {
  console.log("ERROR: The grade can not be greater than 100 or less than 0");
} else if ( grade >= 90 ) {
  console.log("A");
} else if ( grade >= 80 ) {
  console.log("B");
} else if ( grade >= 70 ) {
  console.log("C");
} else if ( grade >= 60 ) {
  console.log("D");
} else if ( grade >= 50 ) {
  console.log("E");
} else if ( grade < 50 ) {
  console.log("E");
}
