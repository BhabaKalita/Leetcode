/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for(let i=0; i<s.length; i++) {
        let str = s[i];

        if(str == '(' || str == '{' || str == '[') {
            stack.push(str);
            continue;
        }

        if(stack.length == 0) return false;

        let check;
        switch(str) {
            case ')':   
                    check = stack.pop();
                    if(check != '(') return false;
                    break;
            case '}':
                    check = stack.pop();
                    if(check != '{') return false;
                    break;
            case ']':
                    check = stack.pop();
                    if(check != '[') return false;
                    break;

            default :
                    break;
        }
    }
        return (stack.length == 0);
};