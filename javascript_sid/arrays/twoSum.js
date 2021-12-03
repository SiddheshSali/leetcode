var twoSum = function(nums, target) {
    let index_arr = [];
    let second_int = 0
    nums.filter((item, index)=>{
           second_int = target - item;
            console.log("second_int", second_int);
            if(nums.includes(second_int)){
                index_arr.push(index);
                if(item == second_int){
                    index_arr.push(nums.indexOf(second_int, index))
                } else {
                    index_arr.push(nums.indexOf(second_int))
                }
                
            }
        
        
    });
    console.log(index_arr)
    
    if(index_arr.length > 2){
        index_arr = [...new Set(index_arr)];
        // index_arr.shift();
    }
    if(index_arr.length > 2){
        // index_arr = [...new Set(index_arr)];
        index_arr.shift();
    }
    console.log(index_arr)
    return index_arr;
};