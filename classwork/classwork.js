

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numMin(a,b,c) {
// let min;
// if(a <= b && a <= c) min = a;
// if(b <= a && b <= c) min = b;
// if(c <= b && c <= a) min = c;
// console.log('min', min);
// return min;
// }
// const min = numMin(7,2,5);
// console.log(min);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function numMax(a,b,c) {
// let max;
// if(a >= b && a >= c) max = a;
// if(b >= a && b >= c) max = b;
// if(c >= b && c >= a) max = c;
// console.log('max', max);
// return max;
// }
// const max = numMax(7,2,5);
// console.log(max);


// - створити функцію яка повертає найбільше число з масиву

// function arrMax(array) {
//     let max = array[0];
//     for (const max1 of array) {
//         if (max1 > max) max = max1;
//     }
//     return max;
// }
// let ret = arrMax([10,55,45,177,9])
// console.log(ret)


// - створити функцію яка повертає найменьше число з масиву
// function arrMin(array) {
//     let min = array[0];
//     for (const min1 of array) {
//         if (min1 < min) min = min1;
//     }
//     return min;
// }
// let ret = arrMin([10,55,45,177,9])
// console.log(ret)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// function funSum(array) {
//     let i = 0;
//     for (const arrayElement of array) {
//         i =i + arrayElement;
//
//     }
//     return i;
// }
//
// let sum = funSum([1, 2, 10]);
// console.log(sum)



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function funSum(array) {
//     let i = 0;
//     for (const arrayElement of array) {
//         i =(i + arrayElement);
//
//     }
//     return i/array.length;
// }
//
// let sum = funSum([1, 2, 10]);
// console.log(sum)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function funMinMax(){
//     let min=arguments[0];
//     let max=arguments[0];
//     for (const item of arguments){
//         if(item >max) max=item;
//         if(item <min) min=item;
//     }
//     console.log('max',max);
//     return min;
// }
// const min = funMinMax (1,45,4,8,41,7896,4,432,712)
// console.log('min', min)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].