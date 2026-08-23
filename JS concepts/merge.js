let a = [2,8,15,18];
let b = [5,9,12,17];

function merge(a, b) {
    let i = 0;
    let j = 0;
    let k = 0;
    let c = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c[k++] = a[i++];
        }
        else {
            c[k++] = b[j++];
        }
    }
    
    while (i < a.length) {
        c[k++] = a[i++];
    }

    while (i < b.length) {
        c[k++] = b[i++]
    }
    return c;
}

console.log(merge(a, b));
