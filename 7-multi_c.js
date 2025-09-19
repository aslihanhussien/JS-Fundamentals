const x = Number(process.argv[2]);

// Check if the argument is a valid integer.
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} 
// If it is a positive integer, run the loop.
else if (x > 0) {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
// If the number is 0 or negative, this section is skipped, and nothing is printed.

