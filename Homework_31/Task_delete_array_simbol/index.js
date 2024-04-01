let text = prompt('Введіть текст');
let deleteSimbol = prompt('Введіть символи які треба видалити');

function deleteArraySimbol(text, deleteSimbol) {
    let textArray = [];
    for (let i = 0; i < text.length; i++) {
        if (!deleteSimbol.includes(text[i])) {
            textArray.push(text[i])
        }
    }
    return textArray.join('');
}

let result = deleteArraySimbol(text.split(''), deleteSimbol.trim().split(''));

console.log(result);

