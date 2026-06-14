// 349. Intersection of Two Arrays

// solution using object, function hashing, loops

let nums1 = [4,1,2,4];
let nums2 = [4,2,4];

function intersection(nums1, nums2) {

    let freq1 = {};
    let freq2 = {};

    // Frequency count for nums1
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i];

        if (freq1[num]) {
            freq1[num]++;
        } else {
            freq1[num] = 1;
        }
    }

    // Frequency count for nums2
    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];

        if (freq2[num]) {
            freq2[num]++;
        } else {
            freq2[num] = 1;
        }
    }

    // Find common elements
    let result = [];

    for (let key in freq1) {
        if (freq2[key]) {
            result.push(Number(key));
        }
    }

    return result;
}

console.log(intersection(nums1, nums2));

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

// function intersection(nums1, nums2) {
//   const set1 = new Set(nums1);
//   const result = new Set();

//   for (let num of nums2) {
//     if (set1.has(num)) {
//       result.add(num);
//     }
//   }
//   return Array.from(result);
// }

// function intersectionSimple(nums1, nums2) {
//   const set2 = new Set(nums2);
//   return Array.from(new Set(nums1.filter(num => set2.has(num))));
// }

// function intersectionTwoPointer(nums1, nums2) {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   let i = 0,
//     j = 0;
//   const result = [];

//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] === nums2[j]) {
//       if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
//         result.push(nums1[i]);
//       }
//       i++;
//       j++;
//     } else if (nums1[i] < nums2[j]) {
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return result;
// }

// console.log(intersection(nums1, nums2));

