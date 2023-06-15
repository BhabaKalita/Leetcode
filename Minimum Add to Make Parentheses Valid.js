/**
 * Find the minimum number of paranthesis required to complete the brackets
 */

var minAddToMakeValid = function(s) {
    
    let bal=0;
    let ans=0;

    for(let i=0; i<s.length; i++) {
        let str = s[i];

        bal += (str == '(') ? 1 : -1;

        if(bal == -1) {
            ans += 1;
            bal += 1;
        }
    }

    return ans + bal;
};

let s = "(()"
console.log(minAddToMakeValid2(s))

/**
 * Using stack - an alternate method
 */

function minAddToMakeValid2(s) {

    let stack = [];
    let count = 0;

   for(let i=0; i<s.length; i++) {
    let str = s[i];

    if(str == "(") {
        stack.push(str);
    
    } else if(str == ")") {

        (stack.length != 0) ? stack.pop() : count++;
    }
   }
   
   return count + stack.length;

}