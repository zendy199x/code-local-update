1. Hàm for
Ví dụ 1 : 
// Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 
// function multiply(arr) {

// }

// console.log(multiply([2, 3, 4]));// expect: 24

function multiply(arr) {
  var result = 1;
  for(var i of arr){
    result *= i;
  }
  return result;
}
console.log(multiply([2, 3, 4]));

Vi dụ 2 :

// function sum(numbers) {
  // Giả thiết: numbers là một array các số nguyên
  // Yêu cầu: 
  //	- trả về tổng các số, dùng vòng lặp for ... of
  //  - nếu array trống trả về 0

function sum(numbers) {
    var result = 0;
    for ( var i of numbers) {
    result += i;
    }
return result;
}

Ví dụ 3 : 
// function has(object, key) {
//   viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
//   Tham số:
//   	- object: object cần kiểm tra
//   	- key: key cần kiểm tra xem có tồn tại trong object không
//   Return:
//   	- true nếu có tồn tại
//   	- false nếu không tồn tại


function has(array, value) {
    for ( i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        };
    }
        if ( array[i] !== value) {
            return false;
        }
    
	}
console.log(has([1,2,3],2));

2. Hàm map

Ví dụ 1
//  1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
//  2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 
function tripple(num) {
    return num *3
};
var numbers = [10, 5, 8];
var numberAfter = numbers.map( x => tripple(x)); //arow function
console.log(numberAfter);

Ví dụ 2
// [
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]
// 1 – Viết ra phương thức truyền vào mảng object bên trên và trả về mảng tên của các đối tượng trong object
// Function getNameObject(array){}
// //Kết quả [“Angelina Jolie”, "Eric Jones","Paris Hilton","Kayne West","Bob Ziroll"]
// 2 – Viết ra phương thức tính trung bình tổng số tuổi của các đôi tượng trên


function namesOnly(item) {
  console.log(item.map(value => value.name));
  let newArr= item.map(value => value.age);
    let total = 0;
	  for (let sumage of newArr) {
		  total += sumage;
	}
	return total/newArr.length;
}

namesOnly([
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
])