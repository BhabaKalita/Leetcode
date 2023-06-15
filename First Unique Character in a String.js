
var firstUniqChar = function(s) {

    let countChar = new Map();
    let res = "";
    
    for(let i=0; i<s.length; i++) {
        let char = s[i];

        countChar.set(char, (countChar.get(char) || 0) + 1);
    }
    console.log(countChar);
    for(let i=0; i<s.length; i++){
        let char = s[i];
        // console.log("Charcount ", countChar[i]);
        if(countChar.get(char) == 1) {
            return i;
        }
    }
    return -1;
}

let s = "dddccdbba";
console.log(firstUniqChar(s));