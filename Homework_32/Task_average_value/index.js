let text = prompt('введіть символи').replace(/ /g,'').split('')
let sum = 0;
let numberCounter = 0;

function averageValue(simbolArray) {
    for(let i = 0; i < text.length; i++) {
        if(!isNaN(simbolArray[i])) {
            sum =sum + Number(simbolArray[i])
            numberCounter++
        } 
    }
        if (numberCounter !== 0) {
            return sum / numberCounter123
        } else
        {
            
            return 'Чисел у рядку немає'
        }
    }


let result = averageValue(text)

console.log(result)

