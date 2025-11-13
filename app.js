const numbers = [10, 20, 30, 40, 50];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
let average = sum / numbers.length;
console.log("რიცხვების ჯამი:", sum);
console.log("საშუალო არითმეტიკული:", average);

const device = {
  productName: "iPhone 14",
  memory: "128GB",
  isAvailableAt: ["Rustaveli Ave 10", "Tbilisi Mall", "Batumi Store"],
};

console.log(
  device.productName +
    " with " +
    device.memory +
    " memory is available at " +
    device.isAvailableAt[0] +
    "."
);

const books = [
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
  },
];
console.log(books);
console.table(books);
