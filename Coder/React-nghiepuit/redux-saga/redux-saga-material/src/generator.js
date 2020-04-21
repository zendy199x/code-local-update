// console.log('learning generator function');

// function* helloGeneratorFunction() {
    //cậu lệnh 1
//     yield 2019; //dừng
    //chạy lạị
    //câu lệnh 2
//     return 'tự học lập trình redux saga'; //kết thúc => throw error
//     yield 2020;
// }

// const result = helloGeneratorFunction(); //interator
// console.log('result 1: ', result.next());// 2019 - done: false
// console.log('result 2: ', result.next()); //done: true
// console.log('result 3: ', result.next());


//---------------------------------------------

// console.log('Vòng lặp vô tận');

// function* helloGeneratorFunction() {
//     while (true) {
//         yield 'Tôi đang lắng nghe...';
//     }
// }

// const interator = helloGeneratorFunction();
// console.log('Result 1: ', interator.next());
// console.log('Result 2: ', interator.next());


//-----------------------------------------------
//Cách 1
// console.log('generator function: generator trong generator');

// function* printName() {
//     yield 'redux-saga';
// }

// function* hello() {
//     yield 'Xin chào';
//     const nameInterator = printName();
//     yield nameInterator.next();
//     yield 'Kết thúc';
// }

// const interator = hello();
// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());

// -----------------------------------------------

//Cách 2:
// console.log('generator function: generator trong generator');

// function* printName() {
//     yield 'redux-saga';
// }

// function* hello() {
//     yield 'Xin chào';
//     yield* printName();
//     yield 'Kết thúc';
// }

// const interator = hello();
// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());