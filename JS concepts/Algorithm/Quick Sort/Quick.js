let A = [6,5,8,9,3,10,15,12,16];

function QuickSort(A,l,h) {
    if(l<h){
        let j = partition(A,l,h);
        QuickSort(A,i,j);
        QuickSort(A,j+1,h);
    }
}

function QuickSort(A,l,h) {
    let pivot = A[l]

    let i = l;
    let j = h;

    while (i <j) {
        do {
            i++;
        }while (A[i] <= pivot);

        do{
            j--;
        }while (A[j] > pivot);
    
        if (i <j) {
            [A[i], A[j]] = [A[j], A[i]];
        }
    }
    [A[l], A[j]] = [A[j], A[l]];
    return j;
}

QuickSort(A, 0, A.length);
console.log(A);
