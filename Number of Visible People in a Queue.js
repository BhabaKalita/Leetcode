/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    let n = heights.length;
    let ans = new Array(n).fill(0);
    let s = [];

    for(let i=0; i<n; i++) {

        while(s.length > 0 && heights[i] > heights[s[s.length-1]]) {
            let rem = s.pop();
            ans[rem] += 1;
        }

        if(s.length > 0) {
            ans[s[s.length-1]] += 1;
        }
        s.push(i);
    }

    return ans;
};