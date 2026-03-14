let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {

    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    // Print stars and inner spaces
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }

    console.log();
}

// Lower half
for (let i = n - 1; i >= 1; i--) {

    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    // Print stars and inner spaces
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }

    console.log();
}