var limit = 50;
console.log("Prime numbers up to ".concat(limit, ":"));
for (var num = 2; num <= limit; num++) {
    var isPrime = true;
    if (num > 1) {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    else {
        isPrime = false;
    }
    if (isPrime) {
        console.log(num);
    }
}
