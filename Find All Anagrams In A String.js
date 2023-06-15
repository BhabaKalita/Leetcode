function findAnagrams(s, p) {
    const pFreq = {};
    for (const c of p) {
        pFreq[c] = pFreq[c] + 1 || 1;
    }

    const output = [];
    let sFreq = {};
    let left = 0;
    let right = 0;

    while (right < s.length) {
        if (!(s[right] in pFreq)) {
            sFreq = {};
            left = right + 1;
        } else {
            sFreq[s[right]] = (sFreq[s[right]] || 0) + 1;
            if (right - left + 1 === p.length) {
                if (isEqual(sFreq, pFreq)) {
                    output.push(left);
                }
                sFreq[s[left]]--;
                if (sFreq[s[left]] === 0) {
                    delete sFreq[s[left]];
                }
                left++;
            }
        }
        right++;
    }

    return output;
}

function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

function isEqual(obj1,obj2){
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length)
        return false;

    for(let key of keys1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]