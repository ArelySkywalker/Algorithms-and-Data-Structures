function sameFrequency(num1, num2) {
    var str1 = num1.toString();
    var str2 = num2.toString();

    if(str1.length !== str2.length) return false;

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if(!lookup[letter]) {
            return false;
        }else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

sameFrequency(182, 281); // true
sameFrequency(34,14); // false
sameFrequency(3589578, 5879385); //true
sameFrequency(22,222); // false













var words = ["Bill", "Bob", "Sam J"];
var str = "B";

function find(words,str) {
    str = str.split("");
    return words.filter(function (word) {
        return str.every(function (char) {
            return word.indexOf(char) > 1;
        });
    });
}

find(words,str);



var names = ["Bill", "Bob", "Sam J"];
var letter = "B";

function isFirstLetter(arr, str) {
    var bNames = [];
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        if(name[0] == str) { bNames.push(name); }
    }
    if (bNames.length > 0) {
        return bNames;
    }else {
        return "No " + str + " Names";
    }
}

isFirstLetter(names,letter); // ["Bill", "Bob"]
isFirstLetter(["Bill", "Bob", "Sam J"], "B"); // ["Bill", "Bob"]
isFirstLetter(["Tyler","Jordan"], "A"); // "No A Names"
isFirstLetter(["Tyler","Arely"], "A"); // ["Arely"]


