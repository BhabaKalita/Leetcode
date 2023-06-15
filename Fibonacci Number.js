function fibonacci(n) {
    if(n <= 1)
    return n;

    return fibonacci(n-1) + fibonacci(n-2);
}
// console.log(fibonacci(7));

function fib(n, memo={}) {

    if(n <= 1) return n;

    if(n in memo) {
        return memo[n];
    }

    memo[n] = fib(n-1,memo) + fib(n-2, memo);
    return memo[n];
    
}
console.log(fib(5));