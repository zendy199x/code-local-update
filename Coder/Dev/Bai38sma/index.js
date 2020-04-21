var readlineSync = require('readline-sync');
var fs = require('fs');

students = [];

function loadData() {
	var fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);

}

function showMenu(){
	console.log('1. Show all students');
	console.log('2. Creat a student');
	console.log('3. Save & Exit');

	var option = readlineSync.question('> ');
	switch (option) {
		case '1':
			showStudents();
			break;
		case '2':
			showCreatStudent();
			break;
		case '3':
			saveAndExit();
			break;
		default:
			console.log('Wrong option');
			showMenu();
			break;
	}
}

function showStudents() {
	for(var student of students) {
		console.log(student.name, student.age);
	}
}

function showCreatStudent() {
	var name = fs.readlineSync('Name: ');
	var age = fs.readlineSync('Age: ');
	var student = {
		name: name,
		age: parseInt(age);
	}
	student.push(student);
}

function saveAndExit() {
	var content = JSON.stringify(student);
	fs.writeFileSync('./data.json', content, {encoding: 'utf8'});


}

function main() {
loadData();
showMenu();
}
main();