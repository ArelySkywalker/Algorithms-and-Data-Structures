function recursiveRange(num){
   if(num === 0) return 0;
   return num + recursiveRange(num - 1);
}

recursiveRange(6); // 21
recursiveRange(10) // 55