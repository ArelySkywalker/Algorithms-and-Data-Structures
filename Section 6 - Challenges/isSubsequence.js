function isSubsequence(first, second) {
    
    var foundSubsequence = '';

    var i = 0;
    for(var j = 0; j < second.length; j++) {
        if(first[i] == second[j]) {
            i++;
            foundSubsequence += second[j];
        }
    }
    if(foundSubsequence == first) {
        return true;
    }else {
        return false;
    }
}


isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)