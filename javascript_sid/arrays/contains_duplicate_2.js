/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let nums_dup = nums
    return nums.some((item, index)=>{
        return nums_dup.some((dup_item, dup_index)=>{
            if(index !== dup_index && Math.abs(item - nums_dup[dup_index]) <= t && Math.abs(index - dup_index) <= k){
                return true;
            }
            return false
        });
    });
};