function areThereDuplicates(str) {
    // good luck. (supply any arguments you deem necessary.)

    const lookup = {};
    for(let i = 0; i < str.length; i++) {
        let item = str[i];
        lookup[item] ? lookup[item] += 1 : lookup[item] = 1;
    }

    var duplicate = false;
    for(let key in lookup) {
        if(lookup[key] > 1) duplicate = true;
    }

    console.log(lookup);

    return duplicate;
}
