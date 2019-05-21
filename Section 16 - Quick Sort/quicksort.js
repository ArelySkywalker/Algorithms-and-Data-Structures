/**
 *  Quicksort Function
 *  - Call the pivot helper on the array
 *  - When the helper returns to you the updated pivot index, recursively
 *      call the pivot helper on the subarray to the left of that index, and the
 *      subarray to the right of that index
 *  - Your base case occurs when you consider a subarray with less than
 *      2 elements
 */

function pivot(arr, start=0, end=arr.length+1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    var pivot = arr[start];
    var swapIndx = start;

    for(var i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIndx++;
            swap(arr, swapIndx, i);
        }
    }
    swap(arr, start, swapIndx);

    return swapIndx;
 }



function quicksort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left side
        quicksort(arr, left, pivotIndex - 1);
        // right side
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
 }

 quicksort([4,8,2,1,5,7,6,3]);