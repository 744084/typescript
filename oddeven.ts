function printEvenOddNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}

// Call the function to print even and odd numbers
printEvenOddNumbers();

