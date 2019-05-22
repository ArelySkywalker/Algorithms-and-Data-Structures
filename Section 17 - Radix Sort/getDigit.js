/**
 *  Get Digit - Radix Helper
 *  - In order to implement radidx sort, it's helpful to build
 *      a few helper functions first.
 *  - getDigit(num, place) returns the digit in the num
 *      at the given place
 */

 function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
 }

 getDigit(7323, 2);