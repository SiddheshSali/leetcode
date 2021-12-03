/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    nums2.map((item, index)=>{
        nums1[m+index] = item ;
    })
    
    nums1 = nums1.sort(function (a, b) {  return a - b;  });
}; 
