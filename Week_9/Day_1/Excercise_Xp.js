let promise = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve("success");
	}, 4000)
})

const urls = [
  'https://swapi.dev/api/people/1/',
  'https://swapi.dev/api/people/2/',
  'https://swapi.dev/api/people/3/',
  'https://swapi.dev/api/people/4/'
]
Promise.all(urls.map(url => fetch(url).then(res => res.json())))
.then(arr => {
  console.log(arr)
})