var readline = require("readline");
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

let total = 0;

rl.on("close", () => {
console.log(total);
process.exit(0);
});

rl.on("line", function (data) {
    data = data.split(' ');
    let n = parseInt(data[0]);
    let m = parseInt(data[1]);
    let k = parseInt(data[2]);

    total = Math.round(n * k / m);

    rl.close();
});