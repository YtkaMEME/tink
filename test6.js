var readline = require("readline");
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

let total = 0;

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

rl.on("close", () => {
console.log(total);
process.exit(0);
});

rl.question('', (ns) => {
    rl.question('', (data1) => {
        rl.question('', (data2) => {
            rl.question('', (data3) => {
                ns = ns.split(' ');
                data1 = data1.split(' ');
                data2 = data2.split(' ');
                data3 = data3.split(' ');

                let sum = 0;
                let plus = 0;
                let mas = [];

                mas [0] = +data1[0];
                mas [1] = +data2[0];
                mas [2] = +data3[0];

                sum = mas[0] + mas[1] + mas[2];

                if (sum < +ns[1]){
                    plus = (+ns[1] - sum)/3;
                }
                else{
                    mas = mas.sort(compareNumeric);
            
                    total = mas[2]

                    rl.close();
                }
            
                for (let i = 0; i < 3; i++){
                    mas[i] += plus;
                }

                mas = mas.sort(compareNumeric);
            
                total = mas[2]

                rl.close();
            });
        });
    });
});