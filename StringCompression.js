/*
1. start iterating from second character and compare it with the
previous character
2. if same character is found, increase count by 1 
3. convert count from integer to string (note 2). And "split()"
(note 3) is to make sure that when count is a two digit integer,
for example, 12, it will be split into multiple characters: "1"
and "2" then stored in the array (part of the requirement).
4. Delete duplicated elements and replace them with character count
5. reset the index to the start of new character. In test case:
["a","a","a","b","b"], the index for the three "a" are 0, 1, 2 and
index for the first "b" is 3. Once we compress all the "a" and
modify the array with the count, we will get a new array
["a","2","b","b"]. And in this new array, the index of the first
"b" becomes 2. This solution uses "i - deletedElement.length +
countArr.length" to reset i to the new character
6. reset the count back to 1, so that counting starts again with
new character
*/

function StringCompression(str){
  let count = 1;

  for(let i=1; i<=str.length; i++){
    if(str[i] == str[i-1]) {
        count++;
    } else {
        if(count > 1){
            let countArr = count.toString().split('');
            let deletedElement = str.splice(i-count+1, count-1, ...countArr);

            i = i - deletedElement.length + 1;
        }
        count = 1;
    }
  }
  return str;
}
console.log(StringCompression(["a","a","b","b","c","c","c"]));

/**
 * GPT Ans 2
 */
function compress(chars) {
  let i = 0;
  let j = 0;
  
  while (i < chars.length) {
    let count = 1;
    while (i < chars.length - 1 && chars[i] === chars[i + 1]) {
      count++;
      i++;
    }
    
    chars[j] = chars[i];
    j++;
    
    if (count > 1) {
      let countStr = count.toString();
      for (let k = 0; k < countStr.length; k++) {
        chars[j] = countStr.charAt(k);
        j++;
      }
    }
    
    i++;
  }
  
  return j;
}

/**
 * GPT Ans3
 */
function compress(chars) {
  const counts = new Array(26).fill(0);
  let j = 0;
  
  for (let i = 0; i < chars.length; i++) {
    counts[chars[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    
    if (i === chars.length - 1 || chars[i] !== chars[i + 1]) {
      chars[j] = chars[i];
      j++;
      if (counts[chars[i].charCodeAt(0) - 'a'.charCodeAt(0)] > 1) {
        const countStr = counts[chars[i].charCodeAt(0) - 'a'.charCodeAt(0)].toString();
        for (let k = 0; k < countStr.length; k++) {
          chars[j] = countStr.charAt(k);
          j++;
        }
      }
      counts[chars[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
    }
  }  
  return j;
}