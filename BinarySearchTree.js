function BinarySearchTree() {
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    function nodeHeight(node) {
        if(!node){
            return -1
        }else {
            return Math.max(nodeHeight(node.left),nodeHeight(node.right)) + 1
        }
    }
    function rotateRR(node) {
        let temp = node.right
        node.right = temp.left
        temp.left = node
        return temp
    }
    function rotateLL(node) {
        let temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    function rotateLR(node) {
        node.left = rotateRR(node.left)
        return rotateLL(node)
    }
    function rotateRL(node) {
        node.right = rotateLL(node.right)
        return rotateRR(node)
    }
    function insertNode(node, newNode) {
        if(!node){
            node = newNode
        }else if(node.key < newNode.key){ //往右边插入
            node.right = insertNode(node.right,newNode)
            //插入完新节点判断树有没有失衡
            if(nodeHeight(node.right) - nodeHeight(node.left) > 1){ //失衡
                if(node.right.key < newNode.key){ //右右失衡
                    node = rotateRR(node)
                }else { //右左失衡
                    node = rotateRL(node)
                }
            }
        }else if(node.key > newNode.key){ //往左边插入
            node.left = insertNode(node.left,newNode)
            //插入完新节点判断树有没有失衡
            if(nodeHeight(node.left) - nodeHeight(node.right) > 1){ //失衡
                if(node.left.key > newNode.key){ //左左失衡
                    node = rotateLL(node)
                }else { //左右失衡
                    node = rotateLR(node)
                }
            }
        }
        return node
    }
    function inOrderTraverse(node, callback) {
        if(!node){
            return false
        }
        inOrderTraverse(node.left,callback)
        callback(node.key)
        inOrderTraverse(node.right,callback)
    }
    function postOrderTraverse(node, callback) {
        if(!node){
            return false
        }
        callback(node.key)
        postOrderTraverse(node.left,callback)
        postOrderTraverse(node.right,callback)
    }
    function preOrderTraverse(node, callback) {
        if(!node){
            return false
        }
        callback(node.key)
        preOrderTraverse(node.left,callback)
        preOrderTraverse(node.right,callback)
    }
    function findMin(node) {
        if(node){
            while (node.left) {
                node = node.left
            }
            return node.key
        }
        return null
    }
    function findMax(node) {
        if(node){
            while (node.right) {
                node = node.right
            }
            return node.key
        }
        return null
    }
    function hasKey(node, key) {
        if(!node){
            return false
        }
        if(node.key < key){
            return hasKey(node.right,key)
        }else if(node.key > key){
            return hasKey(node.left,key)
        }else {
            return true
        }
    }
    function removeNode(node, key) {
        if(!node){ //1.判断节点是否存在
            return null
        }
        //2.比较key值
        if(node.key > key){ //2.1 大于：往左走
            node.left = removeNode(node.left,key)
            return node
        }else if(node.key < key){ //2.2 小于：往右走
            node.right = removeNode(node.right,key)
            return node
        }else { //2.3 等于:
            if(!node.left && !node.right){   //2.3.1 叶节点：把父节点对该节点的引用设置为null
                node = null
                return node
            }else if(node.left || node.right){ //2.3.2 单边内部节点：把父节点对该节点的引用设置为该节点的子节点
                if(node.left){
                    node = node.left
                }
                node = node.right
                return node
            }else { //2.3.2 内部节点：找出该节点右边的最小值，替换该节点的key值，并把右边的最小值设置为null
                let auxKey = findMin(node.right)
                node.key = auxKey
                node.right = removeNode(node.right,auxKey)
                return node
            }
        }

    }
    let root = null
    this.insert = function (key) {
        let newNode = new Node(key)
        if(root){
            root = insertNode(root,newNode)
        }else {
            root = newNode
        }
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverse(root,callback)
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverse(root,callback)
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverse(root,callback)
    }
    this.min = function () {
        return findMin(root)
    }
    this.max = function () {
        return findMax(root)
    }
    this.has = function (key) {
        return hasKey(root,key)
    }
    this.remove = function (key) {
        root = removeNode(root,key)
    }
}

let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

tree.remove(3)
tree.remove(25)
tree.remove(26)
tree.remove(27)
tree.remove(20)
tree.remove(6)
tree.inOrderTraverse(function (value) {
    console.log(value)
})
