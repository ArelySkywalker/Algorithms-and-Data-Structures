// My solution

function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
  
    // I decided to grab the strings and split them up into an array
    var strArr1 = str1.split("");
    var strArr2 = str2.split("");
    
    // If the new arrays are no the same length, return false
    if(strArr1.length !== strArr2.length){
          return false;
    }
    for(let i = 0; i < strArr1.length; i++){
        let correctIndex = strArr2.indexOf(strArr1[i]);

        // loop through and if no index match, return false.
        if(correctIndex === -1) {
            return false;
        }
        
        // else remove the first letter match and keep moving on
        console.log(strArr2);
        strArr2.splice(correctIndex,1)
    }
    return true;
  }
  

// Professors Solution

function validAnagramProf(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true
}