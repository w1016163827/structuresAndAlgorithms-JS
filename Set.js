function MySet() {
    let items = {}
    this.has = function (value) {
        return items.hasOwnProperty(value)
    }
    this.add = function (value) {
        if(this.has(value)){
            return false
        }
        items[value] = value
        return true
    }
    this.remove = function (value) {
        if(this.has(value)){
            delete items[value]
            return true
        }
        return false
    }
    this.clear = function () {
        items = {}
    }
    this.size = function () {
        return Object.values(items).length
    }
    this.value = function () {
        return Object.values(items)
    }
    //集合操作
    this.union = function (otherSet) {
        let unionSet = new MySet()
        let values = this.value()
        values.forEach(value=>{
            unionSet.add(value)
        })
        values = otherSet.value()
        values.forEach(value=>{
            unionSet.add(value)
        })
        return unionSet
    }
    this.intersection = function (otherSet) {
        let intersectionSet = new MySet()
        this.value().forEach(value=>{
            if(otherSet.has(value)){
                intersectionSet.add(value)
            }
        })
        return intersectionSet
    }
    this.difference = function (otherSet) {
        let differenceSet = new MySet()
        this.value().forEach(value=>{
            if(!otherSet.has(value)){
                differenceSet.add(value)
            }
        })
        return differenceSet
    }
    this.subSet = function (otherSet) {
        if(this.size() > otherSet.size()){
            return false
        }
        let values = this.value()
        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])){
                return false
            }
        }
        return true
    }
}

