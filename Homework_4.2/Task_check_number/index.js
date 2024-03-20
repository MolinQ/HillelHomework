
function checkNumber() {
    let num = prompt('Напишіть тризначне число');
    
    if (num[0] === num[1] && num[0] === num[2])
    {
        console.log('всі цифри однакові')
    } 
    else if (num[0] === num[1] || num[0] === num[2] || num[1] === num[2])
    {
        console.log('серед цифр є однакові цифри')
    }
};

checkNumber();