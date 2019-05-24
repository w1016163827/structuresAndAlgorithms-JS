//普通队列
let Queue = (function () {
    let items = new WeakMap()
    class Queue{
        constructor(){
            items.set(this,[])
        }
        enqueue(value){
            let q = items.get(this)
            q.push(value)
        }
        dequeue(){
            let q  = items.get(this)
            return q.shift()
        }
        front(){
            let q  = items.get(this)
            return q[0]
        }
        isEmpty(){
            let q  = items.get(this)
            return q.length === 0
        }
        size(){
            let q  = items.get(this)
            return q.length
        }
    }
    return Queue
})()

//优先级队列
let PriorityQueue = (function () {
    let items = new WeakMap()
    function QueueElement(ele, priority) {
        this.ele = ele
        this.priority = priority
    }
    class PriorityQueue{
        constructor(){
            items.set(this,[])
        }
        enqueue(ele,priority){
            let q = items.get(this)
            let queueEle = new QueueElement(ele,priority)
            let added = false
            for (let i = 0; i < q.length; i++) {
                if(queueEle.priority < q[i].priority){
                    q.splice(i,0,queueEle)
                    added = true
                    break
                }
            }
            if(!added){
                q.push(queueEle)
            }
        }
        dequeue(){
            let q  = items.get(this)
            return q.shift()
        }
        front(){
            let q  = items.get(this)
            return q[0]
        }
        isEmpty(){
            let q  = items.get(this)
            return q.length === 0
        }
        size(){
            let q  = items.get(this)
            return q.length
        }
        print(){
            let q  = items.get(this)
            for (let i = 0; i < q.length; i++) {
                console.log(`${q[i].ele} - ${q[i].priority}`)
            }
        }
    }
    return PriorityQueue
})()

function hotPotato(nameList, num) {
    let q = new Queue()
    for (let i = 0; i < nameList.length; i++) {
        q.enqueue(nameList[i])        
    }
    while (q.size() > 1){
        for (let i = 0; i < num; i++) {
            q.enqueue(q.dequeue())
        }
        console.log(`被淘汰者是:${q.dequeue()}`)
    }
    return q.dequeue()
}



module.exports = Queue

