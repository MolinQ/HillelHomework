let num = prompt('Введіть ціле число:')
let isTrue = true;

if(num <= 1) {
    isTrue = false;
}
for (let i = 2; i < num; i++) {
    if(num % i === 0) {
        isTrue = false;
    }
}


if (isTrue) {
    console.log('Число просте')
} else {
    console.log('число не просте')
}