/**
 *  Merge Function
 *  - Create an empty array, ttake a look at the smallest values in each input array
 *  - While there are still values we haven't looked at
 *  - If the value in the first array is smaller than the value in the second array, 
 *      push the value in the first array into our results and move on to the next
 *      value in the first array.
 *  - Else if the value in the first array is large than the value in the second array,
 *      push the value in the second array into our results and move onto the next
 *      value in the second array.
 *  - Once we exhaust one array, push all remaining values from the other array.
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

merge([1,10,50],[2,14,99,100]);