function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([100,200,300,400], 2); // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4); //39
maxSubarraySum([-3,4,0,-2,6,-1], 2); // 5
maxSubarraySum([2,3], 3); // null