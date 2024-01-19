function printEvenOddNumbers() {
    for (var i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log("".concat(i, " is even"));
        }
        else {
            console.log("".concat(i, " is odd"));
        }
    }
}
// Call the function to print even and odd numbers
printEvenOddNumbers();
