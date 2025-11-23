function sumAll(...nums){
  let sum = 0
  for(let i=0; i<nums.length; i++){
    sum += nums[i]
  }
  return sum
}

let res = sumAll(1, 2, 3, 4) // should return 10
console.log(res)