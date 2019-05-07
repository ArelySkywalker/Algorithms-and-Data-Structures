/**
 *  Merge Sort Function
 *  - Break up the array into halves, until you have arrays that are empty or have
 *      one element (use array.slice)
 *  - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until
 *      you are back at the full length of the array
 *  - Once the array has been merged back together, return the merges (and sorted!) array.
 */

function merge(firstArr, scndArr){
    let results = [];
    let i = 0;
    let j = 0;

    while(i < firstArr.length && j < scndArr.length) {
        if(firstArr[i] < scndArr[j]) {
            results.push(firstArr[i]);
            i++;
        }else {
            results.push(scndArr[j]);
            j++;
        }
    }
    while(i < firstArr.length) {
        results.push(firstArr[i]);
        i++;
    }
    while(j < scndArr.length) {
        results.push(scndArr[j]);
        j++;
    }

    return results
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


 mergeSort([4,12,7,5,28]);