const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const arr3 = [5, 6, 7, 8];

1 == "1";
// const a=      ()=>{}
const abc = (a1, a2, a3) => {
  const combinedArr = [...a1, ...a2, ...a3];
  const uniqueArr = [...new Set(combinedArr)];
  const result = uniqueArr
    .filter((num) => num % 2 === 0)
    .map((num) => {
      if (num > 2 && num < 4) {
        return num;
      }
    });
  return result.filter((num) => num !== undefined);
};

console.log(abc(arr1, arr2, arr3));

// const inlineFunc=()=>{
// return "abc"
// }

// const inlineFunc = () => "abc";
