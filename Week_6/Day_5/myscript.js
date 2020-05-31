let display = document.getElementById("main_display")
const searchbar = document.getElementsByName("search")[0]
const robots = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/9?200x200'
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
      }
      ];
       //Initial display
robots.forEach(createCard)

function createCard(robot){
	let newCard = document.createElement("div");
	let name = document.createTextNode(robot.name);
	let profilePic = document.createElement("img");
	profilePic.setAttribute("src", robot.image);
	let p1 = document.createElement("p")
	p1.appendChild(document.createTextNode(robot.username));
	let p2 = document.createElement("p")
	p2.appendChild(document.createTextNode(robot.email));
	[name, profilePic, p1, p2].forEach((value) => {newCard.appendChild(value)});
	newCard.classList.add("card")
	display.appendChild(newCard);
}

//Searchbar-based filtering
function displayFilteredRobots(){
	while(display.firstChild){
		display.removeChild(display.firstChild)
	};
	let input = searchbar.value;
	let robots_filtered = filterRobots(input);
	robots_filtered.forEach(createCard)
}

function filterRobots(input){
	let fits = [];
	robots.forEach((value) => {
		value.name.slice(0, input.length).toLowerCase() == input.toLowerCase() ? fits.push(value) : 
		value.username.slice(0, input.length).toLowerCase() == input.toLowerCase() ? fits.push(value) : 
		value.email.slice(0, input.length).toLowerCase() == input.toLowerCase() ? fits.push(value) : null
	})
	return fits;
}