let arr = [10,45,2,78,34]

function findsecondlargest(arr) {
    let largest = arr[0]
    let secondlargest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]> largest) {
            secondlargest = largest;
            largest = arr[i];
        }
        else if (arr[i]> secondlargest && arr[i] !== largest){
            secondlargest = arr[i];
        }
    }
    return secondlargest;
}
console.log(findsecondlargest(arr));
