let LinkedList = require('./LinkedList')

function HashTable() {
    let table = []
    function loseloseHashCode(key) {
        let hash = 5381
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1003
    }
    function ValuePair(key, value) {
        this.key = key
        this.value = value
        this.toString = function () {
            console.log(`${key}:${value}`)
        }
    }
    this.put = function (key,value) {
        let position = loseloseHashCode(key)
        if(table[position] === undefined){   //并未在这个位置上创建过链表
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key,value))
    }
    this.remove = function (key) {
        let position = loseloseHashCode(key)
        if(table[position]){
            let current = table[position].getHead()
            while (current) {
                if(current.ele.key === key){
                    table[position].remove(current)
                    if(table[position].isEmpty()){
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
        }
        return false
    }
    this.get = function (key) {
        let position = loseloseHashCode(key)
        if(table[position]){
            let current = table[position].getHead()
            while (current) {
                if(current.ele.key === key){
                    return current.ele.value
                }
                current = current.next
            }
        }
        return undefined
    }
}
let hash = new HashTable();
hash.put('Gandalf',   'gandalf@email.com');
hash.put('John',    'johnsnow@email.com');
hash.put('Tyrion',    'tyrion@email.com');
hash.put('Aaron',     'aaron@email.com');
hash.put('Donnie',   'donnie@email.com');
hash.put('Ana',       'ana@email.com');
hash.put('Jonathan',   'jonathan@email.com');
hash.put('Jamie',     'jamie@email.com');
hash.put('Sue',      'sue@email.com');
hash.put('Mindy',   'mindy@email.com');
hash.put('Paul',    'paul@email.com');
hash.put('Nathan',   'nathan@email.com');
hash.get('Gandalf')
console.log(hash.get('Gandalf', ))
console.log(hash.get('John',    ))
console.log(hash.get('Tyrion',  ))
console.log(hash.get('Aaron',   ))
console.log(hash.get('Donnie',  ))
console.log(hash.get('Ana',     ))
console.log(hash.get('Jonathan',))
console.log(hash.get('Jamie',   ))
console.log(hash.get('Sue',     ))
console.log(hash.get('Mindy',   ))
console.log(hash.get('Paul',    ))