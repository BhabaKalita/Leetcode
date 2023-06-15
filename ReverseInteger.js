
const reverse = function(x){
    let ans = 0, digit = 0;
    while(x!==0){
        digit = x%10;
        ans = ans*10+digit;
        x = parseInt(x/10);

        if(ans > Math.pow(2,31)-1 || ans < Math.pow(-2,31)) return 0;
    }
    return ans;
}

console.log(reverseInteger(-1234));




/*function reverseInteger(n){
    var ans = 0;
    while(n>=0){
        let digit = n % 10; //last digit fetch
        ans = ans * 10 + digit;
        console.log(ans);
        n = ~~(n/10);
        return ans;
    }
}
console.log(reverseInteger(123)); */
/*
let number = 123;

let ans = 0;
while(number != 0){
    let digit = number % 10;
    ans = ans * 10 + digit;
    number = ~~(number/10);
}
console.log("Reversed string "+ ans);
*/
// var reverse = function(x) {
    
//     var result = (x+'').split('').reverse().join('');
//     if(result.endsWith('-')){
//         result = '-' + parseInt(result);
//     }
//     return result;

// };
/*
var reverse = function(x) {
    let result = (x+'').split('').reverse().join('');
    return (result.endsWith('-')) 
    ? result = '-'+ parseInt(result) 
    : (result > 2**31 -1) 
    ? 0 
    : parseInt(result)
};
console.log(reverse(-1230));
*/