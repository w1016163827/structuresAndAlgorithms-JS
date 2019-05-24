function LinkedList() {
    let head = null
    let length = 0
    function Node(ele) {
        this.ele = ele
        this.next = null
    }
    this.append = function(element){
        let node = new Node(element)
        //链表为空
        if(!head){
            head = node
        }else { //链表不为空
            let current = head
            while (current.next){
                current = current.next
            }
            current.next = node
        }
        length++
    }
    this.insert = function(position, element){
        //判断position是否有效
        if(position > -1 && position <= length){
            let node = new Node(element)
            let current = head
            if(position === 0){
                node.next = head
                head = node
            }else {
                let index = 0,
                    previous
                while (index++ < position) { // 找到position指定位置的元素
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            return true
        }else {
            return false
        }
    }
    this.removeAt = function(position){
        //参数有效值判断
        if(position > -1 && position < length){
            let current = head
            if(position === 0){//移除第一个元素
                head = head.next
            }else {
                let previous,
                    index = 0
                while (index++ < position) { //找到要删除的元素
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.ele
        }else {
            return null
        }
    }
    this.remove = function(element){
        let index = this.indexOf(element)
        return this.removeAt(index)
    }
    this.indexOf = function(element){
        let current = head,
            index = 0
        while (current){
            if(element === current.ele){ //找到对应元素
                return index
            }else {
                current = current.next
                index++
            }
        }
        return -1
    }
    this.isEmpty = function() {
        return length === 0
    }
    this.size = function() {
        return length
    }
    this.getHead = function(){
        return head
    }
    this.toString = function(){
        let current = head,
            str = ''
        while (current) {
            str += current.ele + (current.next ? 'n' : '')
            current = current.next
        }
        return str
    }
    this.print = function(){
        let current = head
        while (current){
            console.log(current)
            current = current.next
        }
    }
}
function DoublyLinkedList() {
    let head = null
    let tail = null
    let length = 0
    function Node(ele) {
        this.ele = ele
        this.next = null
        this.prev = null
    }
    this.append = function(element){
        let node = new Node(element)
        //链表为空
        if(!head){
            head = node
            tail = node
        }else { //链表不为空
            let current = head
            while (current.next){
                current = current.next
            }
            current.next = node
            node.prev = current
            tail = node
        }
        length++
    }
    this.insert = function(position, element){
        //判断position是否有效
        if(position > -1 && position <= length){
            let node = new Node(element)
            let current = head
            if(position === 0){ //添加到首部
                if(!head){//判断链表是否为空
                    head = node
                    tail = node
                }else {
                    node.next = current
                    head = node
                }
            }else if(length === position){ //添加到尾部
                current = tail
                current.next = node
                node.prev = current
                tail = node
            }else {
                let index = 0,
                    previous
                while (index++ < position) { // 找到position指定位置的元素
                    previous = current
                    current = current.next
                }
                previous.next = node
                current.prev = node
                node.next = current
                node.prev = previous
            }
            length++
            return true
        }else {
            return false
        }
    }
    this.removeAt = function(position){
        //参数有效值判断
        if(position > -1 && position < length){
            let current = head
            if(position === 0){//移除第一个元素
                head = current.next
                if(length === 1){
                    tail = null
                }else {
                    head.prev = null
                }
            }else if(position === length-1){//移除最后一个元素
                current = tail
                tail = tail.prev
                tail.next = null
            } else {
                let previous,
                    index = 0
                while (index++ < position) { //找到要删除的元素
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                console.log(current)
                current.next.prev = previous
            }
            length--
            return current.ele
        }else {
            return null
        }
    }
    this.remove = function(element){
        let index = this.indexOf(element)
        return this.removeAt(index)
    }
    this.indexOf = function(element){
        let current = head,
            index = 0
        while (current){
            if(element === current.ele){ //找到对应元素
                return index
            }else {
                current = current.next
                index++
            }
        }
        return -1
    }
    this.isEmpty = function() {
        return length === 0
    }
    this.size = function() {
        return length
    }
    this.getHead = function(){
        return head
    }
    this.toString = function(){
        let current = head,
            str = ''
        while (current) {
            str += current.ele + (current.next ? 'n' : '')
            current = current.next
        }
        return str
    }
    this.print = function(){
        let current = head
        while (current){
            console.log(current)
            current = current.next
        }
    }
}

let doublyLinkedList1 = new DoublyLinkedList()
module.exports = LinkedList