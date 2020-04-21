var readlineSync = require('readline-sync');
var fs = require('fs');

var phoneList = [];

var loadData();
	var fileContent = fs.readFileSync('./data.json');
	contacts = JSON.parse(fileContent);
	
var showMenu() {
	console.log('1. Show contacts');
	console.log('2. Add new contact');
	console.log('3. Edit contact');
	console.log('4. Delete contact')
	console.log('5. Search contact');
	console.log('6. Exit');

var option = readlineSync.question('> ');
	switch (option) {
		case '1':
			showContacts();
			break();
		case '2':
			creatContacts();
			break;
		case '3':
			editContacts();
			break;
		case '4':
			deleteContacts();
			break;
		case '5':
			searchContacts();
		case '6':
			break;
		default:
			console('Wrong option');
			break;
	}
}

function showContact() {
	for(var contact of contacts) {
		console.log('ID:' '+contact.id', 'Name:' '+contact.name', 'Phone Number:' 'contact.numberphone');
	}
}

function addContact() {
	var name = readlineSync.question('Name: ');
	var numberphone = readlineSync.question('Number phone: ');
	var contact = {
		id: id.length + 1,
		name: name,
		numberphone: parseInt(numberphone)
	}
	contact.push(contacts);
	var content  = JSON.stringify('./data.json');
	fs.writeFileSync('./data.json, content', {encoding: "utf8"});
}

function editContact() {
	showContact();
	console.log('Input ID change: ');
	let ans = readlineSync.question('ID: ');
	ans = Number(ans);
    let obj = phoneList[ans-1];
    let newPhone = readlineSync.question("New phone number: ("+obj.numberphone+"):");
    let newName = readlineSync.question("New name: ("+obj.name+"):");
    phoneList[ans-1].numberphone = newPhone;
    phoneList[ans-1].name = newName;
    fs.writeFileSync("./data.json",JSON.stringify(phoneList),(err)=>{
      if(!err){
     	return "Edit success";
      } else {
        console.log("Error ! Please try again");
      }
    });
    var option = readlineSync.question('Do you change again? 1. Yes  2. No  ')
        if (option === 1) {
            editContacts();
        } else if(option === 2) {
            showmenu();
    }
}

function deleteContact(){
    console.log('Input ID delete: ');
    var id_del = readlineSync.question('> ');
    var del = Number(id_del - 1);
    phoneList.splice(del,1,{id: id_del,name:'Success',numberphone:'Success'});
    fs.writeFile("./dataphone.json",JSON.stringify(phoneList),(err)=>{
        if(!err){
       return "Delete contact success";
        }else{
          console.log("Error! Please try again");
        }
      });
      var option2 = readlineSync.question('Do you change again ? 1. Yes  2. No  ')
        if (option2 === 1) {
            editContact();
         } else if(option2 === 2) {
             showMenu();
         };
};

function searchContacts() {
    console.log('Input search contacts: ');
    var qs = readlineSync.question('> ');
    search(phoneList,qs);
    function search(phoneList,qs) {
        if(!isNaN(qs)) {
           qs = Number(qs);
           for(x of phoneList {
             if(Number(x.phoneNumber) - Number(qs) === 0) {  
              console.log('ID: '+x.id+'  '+'Name: '+x.name+'  '+'Phone Number: '+x.phoneNumber);
             }
           }
           //showContacts();
        }else{
          qs = qs.toString();
          for(x of phoneList){
            if(change_alias(x.name).toLowerCase().indexOf(change_alias(qs).toLowerCase()) >= 0) {
              console.log('ID: '+x.id+'  '+'Name: '+x.name+'  '+'Phone Number: '+x.phoneNumber);
            }
        }
        showContacts(); 
	};

function change_alias(alias) {
    var str = alias;
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.trim(); 
    return str;
};

function main() {
loadData();
showMenu();
}
main();