let n = 1;
let x = 1;
while (n < 10) {
    if (n === 0) {
        break;
    }
    n++;
    x = x * n;
}
console.log(x);