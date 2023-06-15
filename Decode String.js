function decodeString(str){

    let stack = [];
    let countStr = '';
    let countNo = '';

    for(let i=0; i<str.length; i++){

        if(str[i] == '['){
            
            stack.push(countStr);
            stack.push(countNo);

            countStr = '';
            countNo = '';

        } else if(str[i] == ']') {

            let prevNo = stack.pop();
            let prevStr = stack.pop();

            countStr = prevStr + countStr.repeat(parseInt(prevNo));

        } else if(/\d/.test(str[i])) {

            countNo += str[i];

        } else {

            countStr += str[i];

        }
    }

    return countStr;
}

let s = "2[abc]3[cd]ef";
console.log(decodeString(s));