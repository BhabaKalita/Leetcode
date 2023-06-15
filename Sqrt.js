var mySqrt = function(x) {
    let s = 0, e = Math.floor(x / 2) + 1;
    let mid = Math.floor(s + (e-s)/2);

    if(x == 0 || x == 1) return x;

    while(s <= e){

        if(mid*mid == x){
            return mid;

        } else if(mid*mid > x) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
        mid = Math.floor(s + (e-s)/2);
    }
    return Math.floor(e);
};

// console.log(mySqrt(8));
/**
 * 
 * @param {Using Newtons method of guessing}
 */
function sqrt(x){
    let guess = 1;
    let lastguess = 0;

    while(guess !== lastguess){
        lastguess = guess;

        guess = (guess + x/guess) / 2;

    }
    return ~~guess;
}
// console.log(sqrt(17));
/*
function sqrtBS(n) {
    let s=0, e=n;
    let ans = -1; 
    while(s <= e) {
        let mid = Math.floor(s+(e-s)/2);
        if(mid*mid == n) {
            return mid;
        } else if(mid*mid > n) {
            e = mid - 1;
        } else {
            ans = mid;
            s = mid + 1;
        }
    }
    return ans;
}

function sqrtPrecision(n,tempSol,precision) {

    let ans = tempSol;
    let factor = 0.1;

    for(let i=0; i<precision; i++) {
        factor /= 10;

        for(let j=ans; j*j<=n; j+=factor) {
            ans = j;
        }
    }
    return ans;
}
*/

function sqrtBS(n) {
    let s = 0, e = n;
    let ans = -1; 
    while (s <= e) {
        let mid = Math.floor(s + (e - s) / 2);
        if (mid * mid == n) {
            return mid;
        } else if (mid * mid > n) {
            e = mid - 1;
        } else {
            ans = mid;
            s = mid + 1;
        }
    }
    return ans;
}

function sqrtPrecision(n, tempSol, precision) {
    let factor = 0.1;
    for (let i = 0; i < precision; i++) {
        while ((tempSol + factor) * (tempSol + factor) <= n) {
            tempSol += factor;
        }
        factor /= 10;
        let j = tempSol;
        while (j * j <= n && j <= tempSol + factor) {
            tempSol = j;
            j += factor;
        }
    }
    return tempSol;
}


let n = 48;
let sqrtInt = sqrtBS(n)
// console.log(sqrtInt);

console.log(sqrtPrecision(n,sqrtInt,2));