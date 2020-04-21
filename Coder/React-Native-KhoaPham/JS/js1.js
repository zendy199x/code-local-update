// "Hello"
// ctrl + / : Comment code không sử dụng
// Mở môi trường thực thi  
// Macos : control + `
// Window : ctrl + ` 
// ngắt thực thi : ctrl + c
// var a = "hello"
// var b = "xin chao"

// console.log(b)
//1 : Khai báo biến : var let const

// const a
// console.log(a)
// 2 : Toán tử (+ , - , * , /)
// var a = 5 + 6 //(Biểu thức)
// var b = a++ //(Biểu thức)
// var c = (a > b) ? a : b //(Toán tử 3 ngôi)
// var a = 5
// var b = 6
// var c = ++a + b++ - a++ + b-- + a++ + b--
//6 + b++ - a++ + b-- + a++ + b-- : a = 6 
// 6 + 6 - a++ + b-- + a++ + b-- : a = 6 , b = 7
// 6 + 6 - 6 + b-- + a++ + b-- : a = 7 , b = 7
//6 + 6 - 6 + 7 + a++ + b-- : a = 7 , b = 6
//6 + 6 - 6 + 7 + 7 + b-- : a = 8 , b = 6
//6 + 6 - 6 + 7 + 7 + 6 = 26
// console.log(c)
// var a = 5
// a  += 2
// console.log(a)
// 3 : Kiểu dữ liệu null , NaN , undefined
//null : cố tình gán giá trị là null
// var a = null
// console.log(a)
//NaN : not a number : biểu thức có xuất hiện undefined
// var a = undefined + "" //Th đặc biệt : Phép nối chuỗi
// console.log(a)
//undefined
//1 : Tạo ra 1 biến mà không cấp giá trị
// var a
//2 : function không có câu lệnh return
// function show(){

// }
//3 : Function chỉ có chữ return
// function show(){
//     return
// }
//4 : Truy vấn vào giá trị không tồn tại
// var a = {name : "Phát"}
// console.log(a.age)
// 4 : if else
// var a = 5
// var b = 6
// 6 trường hợp false : 0 , null ,undefined , NaN , false , ""
// if(a = -1){
//     console.log("Đúng")
// }else{
//     console.log("Sai")
// }
// let a = true
// switch(a){
//     case true : console.log("đây là true")
//         return
//     case false : console.log("đây là false")
//         return
//     default : console.log("Không có giá trị")
//         return
// }
// Mảng : 
// let numbers = [1,3,5,7,9,11]
// for
// let i = 0
// for( ; i < numbers.length ; i++){
//     console.log(numbers[i]);
// }
// for(let number of numbers){
//     if(number === 5) return
//     console.log(number)
// }
// so sánh
// let a = "505"
// let b = "505"  
// if(a == b){
//     console.log("Bằng nhau")
// }else{
//     console.log("Khác nhau")
// }
// Phương thức check type data
// typeof
// let a = 10
// function a(){}
// console.log(typeof a)
// for in : duyệt key
// let numbers = [1,2,3,4,5]
// for(let value in numbers){
//     console.log(value)
// }
// let index = 0
// while(index < numbers.length){
//     console.log(numbers[index])
//     index++
// }
// let numbers = [1,2,3,4,5]
// numbers.push(10)
// numbers.pop()
// numbers.shift()
// numbers.unshift(0)
// console.log(numbers)
// 1 - 100 
// + In số chẳn
// + In số lẻ
// + In số chia 3 dư 1
// + In số chính phương
// for(let i = 1 ; i <= 100 ; i++){
//     if(i % 2 === 0) console.log(i)
// }
// for(let i = 1 ; i <= 100 ; i++){
//     if(i % 2 === 1) console.log(i)
// }
// for(let i = 1 ; i <= 100 ; i++){
//     if(i % 3 === 1) console.log(i)
// }

// 1 : function nhan tham so 1 function
// function xulybaitoan(fn){
//     fn()
// }
// 2 : Function nhan function return function
//console.log()
// xulybaitoan(console.log())
// function xulybaitoan(fn){
//     return fn(1)
// }
// xulybaitoan(console.log)
// for(let i = 1 ; i <= 100 ; i++){
//     if(Math.sqrt(value) % 1 == 0) return 
// }
// function xulybaitoan(fn){
//     for(let i = 1 ; i <= 100 ; i++){
//         const dk = fn(i) == true
//         if(dk) console.log(i)
//     }
// }
// xulybaitoan(function(value){
//     if(Math.sqrt(value) % 1 == 0) return true
// })
// let mang = [1,2,3,4,5,6,7,8,9,10]
// let mangmoi = mang.map(function(value){
//     return value * 2
// })
// console.log(mangmoi)
// function sumElement(array){
//     let tong = 0;
//     for(let value of array){
//         tong += value
//     }
//     return tong
// }
// arraynumber = [1,2,3,4,5]
// console.log(sumElement(arraynumber))
const persons = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
]
function getAllName(array){
    let arrayname = array.map(function(person){
        return person.name
    })
    return arrayname
}
function average(array){
    let arrayage = array.map(function(person){
        return person.age
    })
    let sumage = 0
    for(let value of arrayage){
        sumage += value
    }
    return sumage / array.length
}
// console.log(getAllName(persons))
console.log(average(persons));
  

