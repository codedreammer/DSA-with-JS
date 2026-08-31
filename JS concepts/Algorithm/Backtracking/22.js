let n = 3

function backtrack(n) {
    let ans = []
    function backtrack(cur,open,close,max) {
        if(cur.length === max * 2) {
            ans.push(cur)
            return
        }
        if(open < max) {
            backtrack(cur + "(", open + 1, close, max)
        }
        if(close <open) {
            backtrack(cur + ")", open, close + 1, max)
        }
    }
    backtrack("",0,0,n)

    return ans
};

console.log(backtrack(n));
