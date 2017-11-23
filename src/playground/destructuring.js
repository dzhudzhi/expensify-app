// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };
//
// const { name, age, location } = person;
// const { city } = location;
//
// console.log(`${name} is ${age}. ${city}`)

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    //name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Publisher' } = book.publisher;

console.log(publisherName);
