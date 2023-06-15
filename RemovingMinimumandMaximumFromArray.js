/*

[ _ _ _ _ _ min/max _ _ _ _ _ _ max/min _ _ _ _ _ _ ]
  <-- a -->   (i)   <---  b --->  (j)  <---- c ---->
<-----------------------N ------------------------->

                      0   1  2  3  4  5  6  7
For ex: Input: arr = [2, 10, 7, 5, 4, 1, 8, 6]

For removing one from start and the other from end:
No. of deletion = (a + c) = ( (i + 1) + (n – j) )

For removing both of them from starting of the array:
No. of deletion = (a + b) = (j + 1)

For removing both of them from the end of the array:
No. of deletion = (b + c) = (n – i)

*/

var minimumDeletions = function(nums) {
    
    let n = nums.length;
    let minIndex = nums.indexOf(Math.min(...nums));
    let maxIndex = nums.indexOf(Math.max(...nums));

    if(minIndex > maxIndex) {
        let temp = maxIndex;
        maxIndex = minIndex;
        minIndex = temp;
    }

    let bothground = (minIndex + 1) + (n - maxIndex);

    let frontground = maxIndex + 1;

    let background = n - minIndex;

    let ans  = Math.min(frontground,background);

    let finalAns = Math.min(ans, bothground);

    return finalAns;

}


// let arr = [2, 10, 7, 5, 4, 1, 8, 6];
let arr = [56];
console.log(minimumDeletions(arr));
// let min = arr.indexOf(Math.max(...arr));
// console.log(min)