// Linear Search pseudocode
//  - This function accepts an array and a value
//  - Loop through the array and check if the current array element
//      is equal to the value
//  - If it is, return the index at which the element is found
//  - If the value is never found, return -1 

function linearSearch(arr, value) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) return i;
    }
    return -1;
}

/** 
 * What is the Big O notation?
 *  - 1 assignment
 *  - n comparisons
 *  - n additions
 *  
 *  - O(2n + 1) = O(n)
*/

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
linearSearch([100], 100); // 0
linearSearch([1, 2, 3, 4, 5], 6); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1