/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

var readlineSync = require('readline-sync');
var fs = require('fs');
var content = fs.readFileSync('./data.json',{encoding:'utf8'});
var show = JSON.parse(content)
var data = [];
data = show;
//data.students = [];
while(true) {
var options = readlineSync.question('what is your option? 1.Show data 2.Add data 3.Save and exit');
if (options == 1){
    console.log(show);
    console.log(options);
};
if (options == 2){
let member = {};
member.name = readlineSync.question("What's your name ?");
member.age = readlineSync.question('Your age ?');
member.gender = readlineSync.question('Your gender ?');
data.students.push(member);
fs.writeFileSync('./data.json', JSON.stringify(data));
console.log(options);
}
if (options ==3) {
    var or = readlineSync.question('Save and exit ? 1.Yes 2.No');
    console.log(or);
}
if (or == 2) {
   console.log(show);
   console.log(options);
}
if (or == 1) {
   break;
}
}
