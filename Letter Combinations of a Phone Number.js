function letterCombinations(digits) {
    if(digits.length == 0) return [];

    let letterMap = {
        "2" : ['a','b','c'],
        "3" : ['d','e','f'],
        "4" : ['g','h','i'],
        "5" : ['j','k','l'],
        "6" : ['m','n','o'],
        "7" : ['p','q','r','s'],
        "8" : ['t','u','v'],
        "9" : ['w','x','y','z'],
    };

    let result = [];

    function backtrack(curr, digits) {
        if(digits.length == 0) {
            result.push(curr);
            return;
        }

        let letters = letterMap[digits[0]]; 
        for(let i=0; i<letters.length; i++) {

            backtrack(curr+letters[i], digits.slice(1));
        }
    }
    backtrack("",digits);
    return result;
}
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("79")); // Output: ["pw","px","py","pz","qw","qx","qy","qz","rw","rx","ry","rz","sw","sx","sy","sz"]
