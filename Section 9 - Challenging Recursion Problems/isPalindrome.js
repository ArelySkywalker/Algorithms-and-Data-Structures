function isPalindrome(str){

    let palindrome = true;
    
    function helper(helperInput) {

        let len = helperInput.length;
        if(len === 0) return;

        if(helperInput[0] == helperInput[len - 1]) {
            helper(helperInput.slice(1,-1));
        }else {
            palindrome = false;
        }
    }

    helper(str);

    return palindrome;
}

  isPalindrome("awesome"); // false
  isPalindrome("foobar"); // false
  isPalindrome("tacocat"); // true
  isPalindrome("amanaplanacanalpanama"); // true
  isPalindrome("amanaplanacanalpandemonium"); // false