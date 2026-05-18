Task1:
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    const upperUsernames = data.map(user => user.username.toUpperCase());
    console.log(upperUsernames);
  });

Task2: 
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    const expensive = products.filter(p => p.price > 100);
    console.log(expensive);
  });

Task3: 
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`${hours} : ${minutes} : ${seconds}`);

Task4:
let name = "   Naveen Kumar   ";
let trimmed = name.trim();
let upper = trimmed.toUpperCase();
let includesKumar = upper.includes("KUMAR");
console.log(upper, includesKumar);

Task5: 

let marks = [450, 300, 700, 200, 900];
let sorted = marks.sort((a, b) => b - a);
let top3 = sorted.slice(0, 3);
console.log(top3);


