
const isPowerOfTwo = (n)=>{
    if(n<=0) return false;

    return (n & (n-1)) === 0; 
}

// var isPowerOfTwo = function(n) {
//     for(let i=0; i<=30; i++){
//         if(Math.pow(2,i) == n) return true;
//     }
//     return false;
// };
// console.log(isPowerOfTwo(16));
// var reorderedPowerOf2 = function(N) {
//     let res = N.toString().split("").sort().join("")
//     console.log("res->"+res);
//     for (let i = 0; i < 30; i++)
//         // console.log("I->"+i);
//         if ((1 << i).toString().split("").sort().join("") === res) return true
//     return false
// };
// console.log(reorderedPowerOf2(23));