// const arr = [1, 2, 3];
// const arr2 = [5, 6, 7];
// const abb2 = [0, ...arr, 4, ...arr2];
// console.log(abb2);

// map, filter,foreach, reduce
// const abc=(num) => {num};
// abc(1)
// abb2.map((num) => {
//   console.log(jpt);
// });

// num % 2 === 0;
// abb2.map((num) => {
//   console.log(num * 2);
// });

// const array1 = [0, 1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const mergedArray = [...array1, ...array2];

// // || &&
// mergedArray.map((num) => {
//   // some caluculation do here
//   if (num % 2 !== 0 || num > 7) {
//     return `${num} is odd and greater than 7`;
//   }
// });

// const abc = () => 1000;
// const abc2 = () => {
//   return 1000;
// };
// console.log(abc());

const xyz = (arr1, ar2) => {
  const mergedArray = [...arr1, ...ar2];
  const result = mergedArray.map((num) => {
    if ((num > 5 && num < 10) || num % 2 !== 0) {
      // console.log(num, " <-- this number met the condition");
      return num;
    }
  });
  return result.filter((el) => el !== 1);
};

// console.log(xyz([0, 1, 2], [3, 4, 5, 6, 7, 8, 9]));
// [4,8,12]
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const multiply = (arr1, arr2) => {
  const bigArray = [...arr1, ...arr2];
  const result = bigArray.filter((num) => num % 2 === 0).map((num) => num * 2);
  return result;
};

console.log(multiply(arr1, arr2));
