/**
 *  Digit Count - Radix Helper
 *  - In order to implement radidx sort, it's helpful to build
 *      a few helper functions first.
 *  - digitCount(num) - returns the number of digits in num
 */

 function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
 }

 digitCount(423);