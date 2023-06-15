function merge(nums1,m,nums2,n) {

    let i = m-1, j = n-1;
    let k = m+n-1;

    while(i >= 0 && j >= 0) {

        if(nums1[i] > nums2[j])
            nums1[k] = nums1[i--];
        else
            nums1[k] = nums2[j--];
        k--;
    }

    while(j >= 0) {
        nums1[k--] = nums2[j--];
    }

    return nums1;

}

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1,m,nums2,n));