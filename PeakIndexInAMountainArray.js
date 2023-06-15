function peakIndexInAMountainArray(arr){
    return arr.reduce((iMax,x,i,arr) => x > arr[iMax] ? i : iMax, 0);
}

let arr = [0,10,15,2];
// console.log(peakIndexInAMountainArray(arr));

/**
 * Using Binary Search
 */
var peakIndexInMountainArray = function(arr) {
    let s = 0;
    let e = arr.length - 1;
    let mid = Math.floor(s + (e-s)/2)
    
    while(s < e){
        if(arr[mid] < arr[mid+1]){
            s = mid + 1;
        } else if(arr[mid] > arr[mid+1]) {
            e = mid;
        }
        mid = Math.floor(s + (e-s)/2);
    }
    return s;
    }