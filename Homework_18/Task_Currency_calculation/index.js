// let dolarPrice = 26;
// let res = [];
// for (let i = 10; i <= 100; i += 10) {
//     res.push(i * dolarPrice);
// }

// console.log(res.join(', '))

let dolarPrice = 26;
let res = '';
for (let i = 10; i <= 100; i += 10) {
    res += i * dolarPrice;
    if( i < 100 ) {
        res += ', '
    }
}
console.log(res)