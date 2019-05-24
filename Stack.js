let Stack = (function () {
    let items = new WeakMap()
    class Stack{
        constructor(){
            items.set(this,[])
        }
        //其他方法
        push(value){
            items.get(this).push(value)
        }
        pop(){
            return items.get(this).pop()
        }
        isEmpty(){
            return items.get(this).length === 0
        }
        print(){
            console.log(items.get(this))
        }
    }
    return Stack
})()

function baseConverter(number,base) {
    let remStack = new Stack(),
        rem,
        binaryString = '',
        digArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    while(number >0){
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while (!remStack.isEmpty()) {
        binaryString += digArr[remStack.pop()].toString()
    }
    return binaryString
}

module.exports = Stack
// console.log(baseConverter(5381,2).length)
// console.log(baseConverter(33,2).length)
/*function Stack() {
    let items = []
    this.push = function (value) {
        items.push(value)
    }
    this.pop = function (value) {
        return items.pop()
    }
    this.peek = function () {
        return items[items.length - 1]
    }
    this.isEmpty = function () {
        return items.length == 0
    }
    this.size = function () {
        return items.length
    }
    this.clear = function () {
        items = []
    }
    this.print = function () {
        console.log(items.toString())
    }
}*/


// let stack = new Stack()
// let stack2 = new Stack()
// stack.push(5)
// stack.push(8)
// console.log(stack.peek())
// stack2.push(3)
// stack.print()
// stack2.print()