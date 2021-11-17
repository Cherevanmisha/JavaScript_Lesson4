// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc (a,b) {
//     let res = a * b;
//     return res;
// }
// let result = calc(5,10)
// console.log(result)

//
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calc(r) {
//     let res = 3.14*Math.pow(r, 2);
//     return res;
// }
// let result = calc(2)
// console.log(result)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calc(r,h) {
//     let res = 2 * 3.14 * r * (h+ r);
//     return res;
// }
// let result = calc(2,5)
// console.log(result)



// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [11, 74, 12, 74];
// function fun () {
//     for (const argument of arr) {
//         console.log(argument)
//     }
// }
// fun(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function funText(text) {
//     for (let i = 0; i < 5; i++) {
//                document.write(`<p>${text}</p>`)
//             }
// }
// funText('Hello okten')
//




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function fun(text) {
//     for (let i = 0; i < 3; i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//     }
// }
// fun("item")

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function fun(text, num) {
//     for (let i = 0; i < num; i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//     }
// }
// fun("item", 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

// let arr = [22, true, '24', false, 44, '88'];
// function fun(arguments) {
//     for (let i = 0; i < arguments.length; i++) {
//         document.write(`<li>${arguments[i]}</li>`)
//     }
// }
// fun(arr)



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//         {id: 1, name: 'vasya', age: 31 },
//         {id: 2, name: 'petya', age: 30 },
//         {id: 3, name: 'kolya', age: 29},
//         {id: 4, name: 'olya', age: 28}
//     ];
// function fun(arguments) {
//     for (let i = 0; i < arguments.length; i++) {
//        document.write(`<div>${arguments[i].id}</div> </br>
//                         <div>${arguments[i].name}</div>
//                            <div>${arguments[i].age}</div>  `)
//
//     }
// }
// fun(users)


