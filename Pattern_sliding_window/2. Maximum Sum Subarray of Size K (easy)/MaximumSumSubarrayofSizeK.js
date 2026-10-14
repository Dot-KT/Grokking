const maximumSumSubarrayOfSizeK = function(arr, k){
    if(arr.length<k) return -1;

    let max = 0;
    let sum = 0;
    let windowStart = 0;
    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        sum+= arr[windowEnd];
        if(windowEnd-windowStart > k-1) {
            sum = sum-arr[windowStart];
            windowStart++;
        }
        max=Math.max(max, sum);
    }
    return max;
}

console.log(maximumSumSubarrayOfSizeK([1, 9, 2, 8, 3, 7, 4], 4))