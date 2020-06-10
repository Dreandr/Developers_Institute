function myFunction(){
	firstname = document.forms[0].children[0].value
	secondname = document.forms[0].children[1].value
	console.log(JSON.stringify({firstname, secondname}))
	return JSON.stringify({firstname, secondname})
}