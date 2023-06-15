var isSubsequence = function(s, t) {
    if(s == '') return true;

    let j=0;
    for(let i=0; i<t.length; i++) {
        if(s[j] == t[i]) j++;
    }

    if(j >= s.length){
        return true
    }
    return false;
};

let s = "axc", t = "ahbgdc";
console.log(isSubsequence(s,t))