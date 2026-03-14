let n = 5;

// Upper Half
for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars and inner spaces
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}

// Lower Half
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars and inner spaces
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1)) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}