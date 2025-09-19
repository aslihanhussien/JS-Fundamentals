const x = Number(process.argv[2]);

// Check if the argument is a valid integer.
if (isNaN(x) || x <= 0) {
  // If the argument is not a number or is less than/equal to 0, print the error message.
  console.log("Missing size");
} else {
  // The first loop controls the number of rows.
  for (let i = 0; i < x; i++) {
    let row = "";
    // The second (nested) loop builds the row of X's.
    for (let j = 0; j < x; j++) {
      row += "X";
    }
    // Print the completed row.
    console.log(row);
  }
}
