var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function compareNumber(a, b) {
    if (+a > +b){
        return 1;
    }
    if (+a == +b){
        return 0;
    } 
    if (+a < +b) {
        return -1;
    }
}

let total = '';

rl.on("close", () => {
    console.log(total);
    process.exit(0);
});

rl.on("line", function (data) {
    data = data.split(' ');
    let dataCopy = [];
    let dataCopyReverse = [];
    let a = 0;
    let b = 0;

    for (let i = 0; i < 4; i++){
        dataCopy[i] = data[i];
        dataCopyReverse[i] = data[i];
    }
    
    dataCopy = dataCopy.sort();
    dataCopyReverse = dataCopyReverse.sort().reverse();

    for (let i = 0; i < 4; i++){
        if (+data[i] == +dataCopy[i]) {
            a++
        }
        if(+data[i] == +dataCopyReverse[i]){
            b++;
        }
    }
    
    if (a == 4 || b == 4){
        total = 'YES';
    }
    else{
        total = 'NO';
    }

    rl.close();
});