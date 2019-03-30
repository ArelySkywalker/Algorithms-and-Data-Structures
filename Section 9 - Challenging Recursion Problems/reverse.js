function reverse(str) {
    let reverseStr = "";

    function helper(helperInput) {

        let len = helperInput.length;
        if(len === 0) return ; 

        reverseStr += helperInput[len - 1];

        // Slice the string
        helper(helperInput.slice(0, len - 1));
    }
    helper(str);

    return reverseStr;
}

reverse('awesome'); // emosewa
reverse('rithmschool') // loohcsmhtir