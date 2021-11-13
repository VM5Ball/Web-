//однострочный коммент
/* 
многострочный
коммент
*/

let message;

let varl = 'IH',
    age = 25,
    message2 = "SADAS";

//Тип данных number
let n1 = 25,
    n2 = 25.234;

alert(1/0); //Infinity
alert(-Infinity);
alert('not a number' / 2); //NaN
//Number -(2^53-1) до (2^53-1)

//BigINT
const bigInt = 1225573872634637641984683673134821961274631984287498n;


//String
let str = 'Hello';
let str1 = "Hello";
let str2 = `Hello`;

alert(`${str}!, Vladimir!`);

//Boolean
let bool1 = true;
let bool2 = false;

//null
let age1 = null; //ничего

//undefined
let age2;
alert(age2);

//typeof operator
alert(typeof undefined);
alert(typeof 0);
alert(typeof 10n);
alert(typeof alert)

message = "Hello world"
alert(message);

//взаимодействие с пользователем
alert('hello');

let agePrompt = prompt("how old are you?", 18);

let resultConfirm = confirm("Question:");
console.log(resultConfirm);

//Преобразование типов
let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);

//динамическая типизация
console.log('6'/'2');

//math
let x = 5;
x += 15;
console.log(x);

//постфиксна инкр, декр
let counter = 2;
console.log(counter++);
console.log(counter);
console.log(counter--);
console.log(counter);

//prefix
let counter2 = 2;
console.log(++counter2);
console.log(counter2);
console.log(--counter2);
console.log(counter2);

//if, switch, циклы
let year = prompt('year born', 2014);

if (year == 2015){
    alert('False');
} else if (year==2016){
    alert('True');
} else {
    alert('True2');
}

//operator и
//& проверяет обе части условия
//&& проверяет первую, если левая часть равна False, то вторую не проверяет

//operator или
//| проверяет обе части условия
//|| проверяет первую, если левая часть равна False, то вторую не проверяет

if (year > 2012 && year % 2 == 0){
    alert('smth');
}



let accessAllowed;
let ageTern = prompt('How old are you', 0);
if (ageTern > 18){
    accessAllowed = true;
} else{
    accessAllowed = false;
}

let access2 = (ageTern > 18) ? true : false;


//while
x=0;
while (x<5){
    console.log(`while x=${x}`);
    x++;
}

do{
    console.log(`do while x=${x--}`);
} while (x!=0)

//for
for (let i=0; i<15; i++){
    console.log(`Цикл for ${i}`);
}

//for
for (let i=0; i<15; i++){
    if (i%2==1){
        break;
    }
    console.log(`Цикл for ${i}`);
}

//for
for (let i=0; i<15; i++){
    if (i%2==1){
        continue;
    }
    console.log(`Цикл for ${i}`);
}

//switch
let switchx = 'value1';

switch (switchx){
    case "value1":
        alert(1);
        break;
    case "value2":
        alert(2);
        break;
}

let month = 'june';

switch (month){
    case "january":
    case "february":
    case "december":
        alert('winter');
        break;
    case "june":
    case "july":
    case "auguct":
        alert('summer');
        break;
    default:
        alert('Неправильный месяц!');
        break;
}

//Functions
function showMessage(name){
    console.log(`Hello ${name}`);
}
showMessage('Vladimir')