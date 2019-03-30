

const isOdd = val => val % 2 !== 0;

function someRecursive(numbers, callback){
    // add whatever parameters you deem necessary - good luck!
    const lesserThanFive = numbers.filter(isOdd);

    return lesserThanFive.length > 0 ? true : false;
}

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false