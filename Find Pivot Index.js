function findPivot(arr) {
    /**
     * Find the sum of all the elements in the array
     * compare leftsum with the rightsum i.e leftsum === sum - leftsum - arr[i]
     * if its true return the index
     * else update the leftsum += arr[i]
     * if we dont find, we return -1;
     */
    let sum = 0;
    let leftsum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    
    for(let i=0; i<arr.length; i++){
        if(leftsum === sum - leftsum - arr[i])
            return i;
        leftsum += arr[i];
    }
    return -1;
}

let arr = [2,1,-1];
console.log(findPivot(arr));