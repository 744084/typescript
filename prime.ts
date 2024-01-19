const limit = 50;
console.log(`Prime numbers up to ${limit}:`);

for (let num = 2; num <= limit; num++) {
    let isPrime = true;

    if (num > 1) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }

    if (isPrime) {
        console.log(num);
    }
}


