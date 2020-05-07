let average = [];//I know the excercise description says its got to be a global OBJECT; it also says "You can even make it better with your own ideas," and I think using an array here makes it better because of how easy it is to push all I need into it and then iterate through it to get the average.
name = 1;
do {
	let name = prompt("What is your name?");
	if (isNaN(name) == true){
		average.push(name);
		break;
	}
} while (isNaN(name) == false);
adding_courses = true;
while (adding_courses == true){
	let course = {};
	let course_name = 1;
	do {
		course_name = prompt("What is the name of the course?");
		if (isNaN(course_name) == true){
			course.name = course_name;
		break;
	}
	} while (isNaN(course_name) == false);
	let course_grade = "a";
	do {
		course_grade = prompt("What is your expected grade?");
		course_grade = parseInt(course_grade,10);
		if (isNaN(course_grade) != true){
			course.grade = course_grade;
			break;
		}
	} while (isNaN(course_grade) == true);
	let course_coef = "a";
	do {
		course_coef = prompt("What is the coefficient of the course?");
		course_coef = parseInt(course_coef,10);
		if (isNaN(course_coef) != true){
			course.coef = course_coef;
			break;
		}
	} while (isNaN(course_coef) == true);
	average.push(course);
	let answer = prompt("Would you like to add another course? Type Y/N");
	if (answer == "N"){
		adding_courses = false;
		break;
	}
}
let gradesWeighed = [];
for (i of average.slice(1)){
	gradesWeighed.push(i.grade * i.coef);
}
let sum = 0;
for (i of gradesWeighed){
	sum += i;
}
let avg = sum/gradesWeighed.length
alert(`${average[0]}, your average GPA is ${avg}!`)