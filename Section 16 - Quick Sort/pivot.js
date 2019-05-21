/**
 *  Pivot Helper
 *  - In order to implement quick sort, it's useful to first implement a function
 *      responsible arranging elements in an array on either side of a pivot
 *  - Given an array, this helper function should designate an element as the pivot 
 *  - It should then rearrage elements in the array so that all values less than the
 *      pivot are move to the left of the pivot, and all values greater than the pivot
 *      are moved to the right of the pivot
 *  - The order of the elements on either side of pivot does not matter
 *  - This should return the index of the pivot
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

 pivot([4,8,2,1,5,7,6,3]);