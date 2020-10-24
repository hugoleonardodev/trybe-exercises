//Describes the movement of a piece on Chess game. Using function
// var.toLowerCase() to put all letters of a var in lower case

let piece = "KNIGHT";

if ( piece.toLowerCase() == "bishop") {
    console.log("bishop >> diagonals");
} else if ( piece.toLowerCase() == "king") {
    console.log("king >> only one space in any direction");
} 
else if ( piece.toLowerCase() == "queen") {
    console.log("queen >> all empty spaces in any direction");
} 
else if ( piece.toLowerCase() == "knight") {
    console.log("knight >> leap two spaces obliquely - L-shaped path");
} 
else if ( piece.toLowerCase() == "rook") {
    console.log("rook >> all empty spaces in four straight lines");
} 
else if ( piece.toLowerCase() == "pawn") {
    console.log("pawn >> Move: one space forward only ; Capture: one space diagonally forward");
} else {
    console.log("Error: This piece does not exist");
}
