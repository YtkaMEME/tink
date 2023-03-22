var readline = require("readline");
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

let total = -1;
let min = 2*10**5;
let a = 0;
let b = 0;
let c = 0;
let d = 0;

rl.on("close", () => {
console.log(total);
process.exit(0);
});

rl.question('', (answer1) => {
    rl.question('', (data) => {
        for (let i = 0; i < data.length - 1; i++){
            for (let j = data.length; j > 0; j--){
                let substring = data.slice(i, j);
                if (substring.length < min){
                    for (let h = 0; h < substring.length; h++){
                        if (substring[h] == 'a'){
                            a = 1;
                        }
                        if(substring[h] == 'b'){
                            b = 1;
                        }
                        if (substring[h] == 'c'){
                            c = 1;
                        }
                        if (substring[h] == 'd'){
                            d = 1;
                        }
                    }

                    if (a && b && c && d){
                        min = substring.length;
                        total = min;
                    }
                    a = b = c = d = 0;
                }
            }
        }
        rl.close();
    });
});