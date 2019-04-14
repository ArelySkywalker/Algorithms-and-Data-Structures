function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!


  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  



function runLengthEncoding(str) {

    let result = '';

    function helper(helperInput) {
        // Once the string is empty, return our result
        if(helperInput.length === 0) return;

        let count = 1;
        while(helperInput[0] == helperInput[1]) {
            count += 1;
        }
        result += count + helperInput[0];

        console.log(helperInput);

        helper(helperInput.slice(1));


    }


    helper(str);

    return result;

    
}