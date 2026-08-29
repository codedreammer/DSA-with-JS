let prices = [7,1,5,3,6,4]

function maxProfit(prices) {
    let left = new Array(prices.length)
    let right = new Array(prices.length)

    left[0] = prices[0]
    right[prices.length -1] = prices[prices.length -1]

    for (let i = 1; i < prices.length; i++) {
        left[i] = Math.min(left[i - 1], prices[i])
    }

    for (let i = prices.length - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], prices[i])
    }

    let max = 0

    for (let i = 0; i < prices.length; i++) {
        max = Math.max(max, right[i] -left[i])
    }
    return max
}

console.log(maxProfit(prices));
