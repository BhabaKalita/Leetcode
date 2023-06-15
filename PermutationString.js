/*
ALGORITHM
    check whether s1 < s2 (error case)
    create two arrays s1Map and s2Map of length 26 filled with 0 (input is a-z)
    Loop through s1Map and increment s1 ith index based on a = 0 and z = 26
    Also increment s2Map same as above
    initialize count with 0
    Now loop through s1Map and check s1Map[i] == s2Map[i]. if it's equal increment count by 1
    The idea is if count is 26 at any window then permutation exists
    Now loop through s2.length - s1.length
    We return true if count is 26
    create two variables r and l representing right and left
    right will hold the s2[i + s1.length] - 'a' char array index (0 - 26)
    left will hold the s2[i] - 'a' char array index (0 - 26)
    increment s2[r]++
    if s2Map[r] == s1Map[r], we found a match and increment count
    if s2Map[r] == s1Map[r] + 1, there is no match, decrement count
    decrement s2[l]--
    if s2Map[l] == s1Map[l], we found a match, increment count
    else if s2Map[l] == s1Map[l] -1, there is no match, decrement count
    after loop return count == 26

*/

function permutation(s1,s2){
    if(s1.length > s2.length)
    return false;

    let s1Map = new Array(26).fill(0);
    let s2Map = new Array(26).fill(0);

    for(let i=0; i<s1.length; i++){ //2 times
        s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    let count = 0;
    for(let i=0; i<s1Map.length; i++){ //26 times
        if(s1Map[i] == s2Map[i])
        count++;
    }
    for(let i=0; i < s2.length - s1.length; i++){
        if(count == 26)
        return true;

        let r = s2.charCodeAt(i+s1.length) - 'a'.charCodeAt(0);
        let l = s2.charCodeAt(i) - 'a'.charCodeAt(0);

        s2Map[r]++;
        if(s2Map[r] == s1Map[r]){
            count++;
        }
        //console.log("R+1->"+s1Map[r]+1);
        console.log(s2Map[r],s1Map[r]+2);
        if(s2Map[r] == s1Map[r]+1)
        count--;

        s2Map[l]--; // decresing the count

        if(s2Map[l] == s1Map[l])
            count++;
            if(s2Map[l] == s2Map[l]-1)
            count--;
    }
    return count == 26;
}
console.log(permutation('ab','eidbaooo'));