    // 349. Intersection of Two Arrays
    num1 = [1,2,2,1]
    num2 = [2,2]
    function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    
    const result = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
        result.add(num);
        }
    }
    return Array.from(result);
    }
    function intersectionSimple(nums1, nums2) {
    const set2 = new Set(nums2);
    
    return Array.from(new Set(nums1.filter(num => set2.has(num))));
    }

    function intersectionTwoPointer(nums1, nums2) {
    // Sort both arrays
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let i = 0, j = 0;
    const result = [];
    
    // Two pointers to find common elements
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
        if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
            result.push(nums1[i]);
        }
        i++;
        j++;
        } else if (nums1[i] < nums2[j]) {
        i++;
        } else {
        j++;
        }
    }
    
    return result;
    }
    console.log(intersection(num1, num2));
    