let A = [9, 3, 7, 5, 6, 4, 8, 2];

function mergeSort(A,l,h) {
    if (l<h) {
        mid = (l+h)/2;
        mergeSort (a,l,mid)
        mergeSort (a, mid+1,h);
        mergeSort (A,l,mid,h);
    }
}

function mergeSort(A, l, mid, h) {

    let i = l;
    let j = mid + 1;
    let k = l;

    let C = [];

    while (i <= mid && j <= h) {

        if (A[i] < A[j]) {
            C[k] = A[i];
            i++;
        } 
        else {
            C[k] = A[j];
            j++;
        }

        k++;
    }

 // Remaining elements from left part
    for (; i <= mid; i++) {
        C[k] = A[i];
        k++;
    }

    // Remaining elements from right part
    for (; j <= h; j++) {
        C[k] = A[j];
        k++;
    }

    // Copy C back into A
    for (i = l; i <= h; i++) {
        A[i] = C[i];
    }
}

mergeSort(A, 0, A.length - 1);

console.log(A);
