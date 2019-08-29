// Recursion solution
function fib(n) {
	if(n <= 2) return 1;
	return fib(n-1) + fib(n-2);
}

// Memoization solution
function fibMemo(n, memo=[]) {
	if(memo[n] !== undefined) return memo[n];
	if(n <= 2) return 1;
	var res = fibMemo(n-1, memo) + fibMemo(n-2, memo);
	memo[n] = res;
	return res;
}