
function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!

    let left = 0;
    let leftNext = 1;
    let arrLength = arr.length;
    
    if(arrLength === 0) return 0;

    var uniqueArray = [arr[left]];

    while(leftNext < arrLength) {
        if(uniqueArray[left] != arr[leftNext]) {
            uniqueArray[left + 1] = arr[leftNext];
            left++;
        } else if(uniqueArray[left] == arr[leftNext]) {
            leftNext++;
        }
    }
    return uniqueArray.length;
}


// PROFESSOR SOLUTION

function countUniqueValuesProf(arr) {
    if(arr.length === 0) return 0;

    var i = 0;
    for(var j = 0; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}