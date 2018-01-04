const promise = new Promise((resolve, reject) => {
  resolve('This is my resolved data');
});

promise.then((data) => {
  console.log(data);
})
