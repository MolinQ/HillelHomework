let res = '';
for (let i = 20; i <= 30; i +=0.5) {
    res += i;
    if (i < 30) {
        res += ' '
    }
}

console.log(res)