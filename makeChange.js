function MinCoinChange(coins){
    var coins = coins; //{1}
    var cache = {}; //{2}
    let count = 0
    this.makeChange = function (amount) {
        if(!amount){
            return []
        }
        if(cache[amount]){
            return cache[amount]
        }
        let me = this
        let newAmount,min = [],newMin
        for (let i = 0; i < coins.length; i++) {
            let coin = coins[i]
            newAmount = amount - coin
            if(newAmount >= 0){
                newMin = me.makeChange(newAmount)
            }
            if(
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length)
            ){
                min = [coin].concat(newMin)
                count++
                console.log('new Min ' + min + ' for ' + amount)
            }
        }
        cache[amount] = min
        return [min,count]
    }
}
let coinChange = new MinCoinChange([1,5,10,25])

let res = coinChange.makeChange(-1)
console.log(res)

