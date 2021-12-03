 let arr_indexes = [];
    if(nums.length > 1){
        nums.filter((item, index) => {
            if(nums.indexOf(item) !== index){
                arr_indexes.push(index);
            }
        });
        console.log(arr_indexes);
        return arr_indexes.filter((item,index)=>{
            console.log(nums.indexOf(nums[item]));
            if(Math.abs(nums.indexOf(item) - item) <=k || Math.abs(nums.indexOf(nums[item]) - item) <=k)
                return true;
            else 
                return false
        })
    }
    return false;