const userData = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// console.log(Object.entries(userData));

// find vs filter
// const arr = [2, 4, 2, 6, 8].find((num) => num === 2);
// console.log(arr);

//every
// const allEvenNum = [2, 4, 6, 1].every((num) => num % 2 === 0);
// console.log(allEvenNum);

// //some
// const allEvenNum = [2, 4, 6, 1].some((num) => num % 2 === 0);
// console.log(allEvenNum);

const bbBalajuCustomers = [
  {
    id: 1,
    name: "ram",
    code: "BAL",
    products: ["bag", "gloves", "jacket"],
  },
  {
    id: 2,
    name: "Kaldev",
    code: "BAL",
    products: ["Masu ko achar", "Buff ko achar", "pork sekuwa"],
  },
];

const bbPulchowkCustomers = [
  {
    id: 3,
    name: "Kushal",
    code: "PUL",
    products: ["bag", "pant", "plates"],
  },
  {
    id: 4,
    name: "Anna",
    code: "PUL",
    products: ["Ilove Nepal tshirt", "Frozen momo"],
  },
];
// func->PUL extract->products->Frozen momo

const getPulchowkFrozenMomo = () => {
  const allBBUsers = [...bbBalajuCustomers, ...bbPulchowkCustomers];

  const result = allBBUsers
    .filter((user) => user.code === "PUL")
    .map((user) => user.products)
    .flat()
    .find((product) => product === "Frozen momo");
  return result;
};

console.log(getPulchowkFrozenMomo());
