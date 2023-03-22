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

rl.question('', (answer1) => {
    rl.question('', (data) => {
        data = data.split(' ');

        for (let i = 1; i < data.length + 1; i++){
            let number = {};
            let quantity = 0;
            let quantityOfMax = 0;
            let quantityOfMin = 0;
            let min = 2*10**5;
            let max = -2*10**5;

            for (let j = 0; j < i; j++){
                a = data[j];
    
                if (number[a] != undefined)
                {
                    number[a]++;
                }
                else{
                    quantity++;
                    number[a] = 1;
                }
            }

            for (let key in number){
                if (number[key] < min){
                    min = number[key];
                }

                if(number[key] > max){
                    max = number[key];
                }
            }
            
            for (let key in number){
                if (number[key] == max){
                    quantityOfMax++;
                }
            }
            for (let key in number){
                if (number[key] == min){
                    quantityOfMin++;
                }
            }
            if (((quantityOfMax + quantityOfMin) == quantity && max - 1 == min && quantityOfMax == 1) || max == min || (quantityOfMin == 1 && quantityOfMax + quantityOfMin) == quantity){
                total = i;
            }
        }
        rl.close();
    });
});
