function Dictionary() {
    let items = {}
    this.has = function (key) {
        return items.hasOwnProperty(key)
    }
    this.set = function (key, value) {
        items[key] = value
    }
    this.delete = function (key, value) {
        if(this.has(key)){
            delete items[key]
            return true
        }
        return false
    }
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined
    }
    this.clear = function () {
        items = {}
    }
    this.size = function () {
        return Object.keys(items).length
    }
    this.keys = function () {
        return Object.keys(items)
    }
    this.values = function () {
        return Object.values(items)
    }
    this.getItems = function () {
        return items
    }
}


module.exports = Dictionary


