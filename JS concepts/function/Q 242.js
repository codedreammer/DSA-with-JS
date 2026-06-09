
    // let s = "anagram";
    // let t = "nagaram";
    let s = "car"
    let t = "rat"
    function isAnagram(s, t) {
        
    if(s.length !== t.length){
        return false;
    }

    let freq1 = {};
    let freq2 ={};

    // freq for s 
    for (let i = 0; i < s.length; i++) {
        let num = s[i];

        if (freq1[num]) {
            freq1[num]++
        }else{
            freq1[num] = 1
        }
    }

    // freq for t 
    for (let i = 0; i < t.length; i++) {
        let num = t[i];

        if (freq2[num]) {
            freq2[num]++
        }else{
            freq2[num] = 1
        }
    }
    // comparing the freq

        for(let key in freq1){
        if (freq1[key] !== freq2[key]) {
            return false;
            
        }
    }
    return true;
}
console.log(isAnagram(s , t));

