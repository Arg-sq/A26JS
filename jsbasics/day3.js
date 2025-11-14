const firstName = "John";
const lastName = "Doe";

// console.log("hello my name is" + " " + firstName + " " + lastName);

// console.log(`hello my name is ${firstName} ${lastName}`);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const newArrV2 = [...arr1, ...arr2];
// newArrV2.pop(); //last element remove
// newArr.push(11); //last element add

// newArrV2.shift(); //1st element remove
// newArrV2.unshift(-3); //1st element add

// console.log(newArrV2, "<----- this is my arr");

// const mergeArr = (array1, array2) => {
//   const newArray = [...array1, ...array2, 100];

//   return newArray;
// };

// console.log(mergeArr([1, 2], [3, 4]));

const arr = [10, 20, 30, 40, 50];

console.log(arr.slice(-2));
