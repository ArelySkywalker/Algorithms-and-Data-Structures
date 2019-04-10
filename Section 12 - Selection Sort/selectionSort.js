/**
 *  Selection Sort
 *  - Store the first element as the smallest value you've seen so far
 *  - Compare this item to the next item in the array until you find a smaller number
 *  - If a smaller number is found, designate that smaller number to be the new "minimum"
 *      and continue until the end of the array.
 *  - If the "minimum" is not the value (index) you initially began with, swap the two values
 *  - Repeat this with the next element until the array is sorted.
 */

 function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

     for(var i = 0; i < arr.length; i++) {
         for(j = 0; j < arr.length; j++) {
             var min = arr[i];
             if(min < arr[j]) {
                 swap(arr, i, j);
             }
         }
     }
     return arr;
 }
