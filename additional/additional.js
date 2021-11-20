// Cтворити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи -
// складає або конкатенує їх між собою.


function fun  (arg1,arg2,action) {
    if (action === arg1) {
       return arg1;
    }else if (action === arg1,arg2)
        return arg1+arg2;
}
let ret = fun(2,5);
console.log(ret)




// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// function sumArr(arr1,arr2) {
//     let newArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArray.push(arr1[i] + arr2[i]);
//     }
//     return newArray;
// }
// const ret = sumArr([1,2,3,4],[2,3,4,5]);
// console.log(ret);






// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]



//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]