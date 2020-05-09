let arr = [];
let nums = '631758924';
arr.push(nums[0]);
// console.log(typeof nums);
let c = nums[1];
nums = nums.substring(2);
nums += c;
console.log(nums,arr);
