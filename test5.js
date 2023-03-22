var readline = require("readline");
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

let total = 1;

rl.on("close", () => {
console.log(total);
process.exit(0);
});

rl.question('', (answer1) => {
    rl.question('', (data) => {
        data = data.split(' ');
        for (let l = 0; l < data.length; l++)
        {
            let ss = 0
            for (let r = data.length - 1; r > l - 1; r--)
            {
                ss += +data[r];
                for (let i = 0; i < l; i++)
                {
                    let sum = 0;
                    for (let j = i; j < r; j++)
                    {
                        sum += +data[j];
                    }
                    if (sum == 0){
                        total++;
                        break;
                    }
                }
            }
        }

        rl.close();
    });
});
