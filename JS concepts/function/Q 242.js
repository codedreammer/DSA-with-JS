    // var isAnagram = function(s, t) {
    // if (s.length !== t.length) return false;

    // const count = {};

    // for (const ch of s) {
    //     count[ch] = (count[ch] || 0) + 1;
    // }

    // for (const ch of t) {
    //     if (!count[ch]) return false;
    //     count[ch]--;
    // }

    // return true;
    // };

    let s = "anagram";
    let t = "nagaram";

    let freq1 = {};
    let freq2 = {};
    
    if(s.length !== t.length){
        console.log("not");
        
    }
    for (let i = 0; i < s.length; i++) {
        let num = s[i];

        if (freq1[num]) {
            freq1[num]++
        }else{
            freq1[num] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        let num = t[i];

        if (freq2[num]) {
            freq2[num]++
        }else{
            freq2[num] = 1
        }
    }
    console.log(freq1);
    console.log(freq2);

        for(let key in freq1){
        if (freq1[key] === freq2[key]) {
            console.log("anaram");
            
        }else{
            console.log("Not Anagram");
        }
    }