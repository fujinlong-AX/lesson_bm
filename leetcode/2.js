const twoSum = function(nums,target){
    let map = {};//对象字面量
    nums.foreach(function(e,i){
        map[e] = i;
    }) 
    for (let i = 0; i<nums.length; i++){
        let j = map[target - nums[i]];
        if (j&& j !== i){
            return [i,j];
        }
    }  //foreach是数组循环
};
console.log(twoSum([2,7,11,15]));