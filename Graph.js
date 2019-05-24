Dictionary = require('./Dictionary')
Queue = require('./Queue')
Stack = require('./Stack')
function Graph() {
    let vertices = []
    let adjList = new Dictionary()
    let time = 0
    let initializeColor = function(){
        let color = [];
        for (let i=0; i<vertices.length; i++){
            color[vertices[i]] = 'white'; //{1}
        }
        return color;
    }
    
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v,[])
    }
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        // adjList.get(w).push(v)
    }
    this.toString = function () {
        vertices.forEach(v =>{
            let str = `${v} => `
            adjList.get(v).forEach(n =>{
                str += n + ' '
            })
            console.log(str)
        })
    }
    this.bfs = function(v, callback){ //广度优先遍历
        //得到颜色数组
        let color = initializeColor()
        let q = new Queue()
        q.enqueue(v)
        while (!q.isEmpty()) {
            let u = q.dequeue()
            color[u] = 'gray'
            let neighbors = adjList.get(u)
            neighbors.forEach(w =>{
                if(color[w] === 'white'){
                    color[w] = 'gray'
                    q.enqueue(w)
                }
            })
            color[u] = 'black'
            if(callback){
                callback(u)
            }
        }
    }
    this.BFS = function(v, callback){ //广度优先遍历
        //得到颜色数组
        let color = initializeColor()
        let q = new Queue()
        q.enqueue(v)
        let d= []
        let pred = []
        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0
            pred[vertices[i]] = null
        }
        while (!q.isEmpty()) {
            let u = q.dequeue()
            color[u] = 'gray'
            let neighbors = adjList.get(u)
            neighbors.forEach(w =>{
                if(color[w] === 'white'){
                    color[w] = 'gray'
                    q.enqueue(w)
                    d[w] = d[u] + 1
                    pred[w] = u
                }
            })
            color[u] = 'black'
            if(callback){
                callback(u)
            }
        }
        return {
            distances: d,
            predecessors: pred
        }
    }
    function dfsVisit(u, color, callback) {
        color[u] = 'gray'
        if(callback){
            callback(u)
        }
        let neighbor = adjList.get(u)
        for (let i = 0; i < neighbor.length; i++) {
            let w = neighbor[i]
            if(color[w] === 'white'){
                dfsVisit(w,color,callback)
            }
        }
        color[u] = 'black'
    }
    function DFSVisit(u, color, d, f, p) {
        color[u] = 'gray'
        d[u] = ++time
        let neighbor = adjList.get(u)
        for (let i = 0; i < neighbor.length; i++) {
            let w = neighbor[i]
            if(color[w] === 'white'){
                p[w] = u
                DFSVisit(w,color,d, f, p)
            }
        }
        color[u] = 'black'
        f[u] = ++time
    }
    this.dfs = function (callback) {
        let color = initializeColor()
        for (let i = 0; i < vertices.length; i++) {
            if(color[vertices[i]] === 'white'){
                dfsVisit(vertices[i],color,callback)
            }
        }
    }
    this.DFS = function () {
        let color = initializeColor()
        let d = []
        let f = []
        let p = []
        time = 0
        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0
            f[vertices[i]] = 0
            p[vertices[i]] = null
        }
        for (let i = 0; i < vertices.length; i++) {
            if(color[vertices[i]] === 'white'){
                DFSVisit(vertices[i],color,d,f,p)
            }
        }
        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    }
}


let graph = new Graph();
/*
let myVertices = ['A','B','C','D','E','F','G','H','I'];
for (let i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
*/

let myVertices = ['A','B','C','D','E','F'];
for (let i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
let  result = graph.DFS();

console.log(result)

function printNode(v){
    console.log(v)
}
function shortest() {
    let fromVertex = myVertices[0]
    for (let i = 1; i < myVertices.length; i++) {
        let pathStack = new Stack()
        let pathStr = fromVertex
        for (let toVertex = myVertices[i]; toVertex !== fromVertex; toVertex=shortestPathA.predecessors[toVertex]) {
            pathStack.push(toVertex)
        }
        while (!pathStack.isEmpty()) {
            pathStr += ' — ' +pathStack.pop()
        }
        console.log(pathStr)
    }
}