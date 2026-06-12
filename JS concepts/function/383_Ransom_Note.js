let arr = "ransomNote";
let arr1 = "magazine";

function appared(arr, arr1) {
    let freq1 = {};
    let freq2 = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (freq1[num]) {
            freq1[num]++
        }else{
            freq1[num] = 1
        }
    }
    

        for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];

        if (freq2[num]) {
            freq2[num]++
        }else{
            freq2[num] = 1
        }
    }
    for(let key in freq1){
        if(freq1[key] > (freq2[key] || 0)){
            return false;
        }
    }
    return true;
}
console.log(appared(arr , arr1));
