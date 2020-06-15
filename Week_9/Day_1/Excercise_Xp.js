let promise = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve("success");
	}, 4000)
})