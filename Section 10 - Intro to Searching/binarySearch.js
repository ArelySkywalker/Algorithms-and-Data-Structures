// Binary Search pseudocode
//  - This function accepts an array and a value
//  - Create a start pointer at the start of the array,
//      and a end pointer at the end of the array
//  - While the start pointer comes before the end pointer:
//      - Create a pointer in the middle
//      - If you find the value you want, return the index
//      - If the value is too small, move the start pointer up
//      - If the value is too large, move the end pointer down
//  - If you never find the value, return -1

function binarySearch(arr, value) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== value) {
        if(value < arr[middle]) {
            end = middle - 1;
        }else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === value ? middle : -1;
}

/** 
 * What is the Big O notation?
 *  - O(log n)
 */


binarySearch([1,2,3,4,5], 2); // 1
binarySearch([1,2,3,4,5], 3); // 2
binarySearch([1,2,3,4,5], 5); // 4
binarySearch([1,2,3,4,5], 6); // -1