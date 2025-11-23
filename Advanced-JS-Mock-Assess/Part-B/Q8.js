let nums = [10, 3, 7, 20, 13, 2];

// 1.Using map, create a new array of squares.

let squareArr = nums.map(x => x*x)
console.log(squareArr);

// 2.Using filter, keep only prime numbers.

let primeNums = nums.filter(x => x%2 != 0)
console.log(primeNums);

// 3.Using reduce, find the sum of all elements.

let sumNums = nums.reduce((x,y) => x+y);
console.log(sumNums);

// 4.Using sort, arrange the elements in descending order.
let sortNums = nums.sort((a,b) => b-a);
console.log(sortNums);