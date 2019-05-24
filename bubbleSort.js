function ArrayList() {
    let arr = []
    function swap(index1, index2) {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }
    function mergeSortRec(arr) {
        if(arr.length === 1){
            return arr
        }
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0,mid)
        let right = arr.slice(mid)
        return merge(mergeSortRec(left),mergeSortRec(right))
    }
    function merge(left, right) {
        let il = 0,
            ir = 0,
            res = []
        while (il < left.length && ir < right.length) {
            if(left[il] < right[ir]){
                res.push(left[il++])
            }else {
                res.push(right[ir++])
            }
        }
        while (il < left.length) {
            res.push(left[il++])
        }
        while (ir < right.length) {
            res.push(right[ir++])
        }
        return res
    }
    this.insert = function (item) {
        arr.push(item)
    }
    this.toString = function () {
        return arr.join()
    }
    this.bubbleSort = function () {
        let length = arr.length
        let count = 0
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                if(arr[j] > arr[j+1]){
                    swap(j,j+1)
                }
                count++
            }
        }
        console.log(count)
    }
    this.modifiedBubbleSort = function () {
        let length = arr.length
        let count = 0
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 -i; j++) {
                if(arr[j] > arr[j+1]){
                    swap(j,j+1)
                }
                count++
            }
        }
        console.log(count)
    }
    this.selectionSort = function () {
        let length = arr.length
        let count = 0,minIndex
        for (let i = 0; i < length -1; i++) {
            minIndex = i
            for (let j = i; j < length; j++) {
                if(arr[j] < arr[minIndex]){
                    minIndex = j
                }
                count++
            }
            if(minIndex !== i){
                swap(i,minIndex)
            }
        }
        console.log(count)
    }
    this.insertionSort = function(){
        let length = arr.length,
            temp,
            j,
            count = 0
        for (let i = 1; i < length; i++) {
            temp = arr[i]
            j = i
            while (j > 0 && arr[j - 1] > temp){
                arr[j] = arr[j - 1]
                j--
                count++
            }
            arr[j] = temp
        }
        console.log(count)
    }
    this.mergeSort = function () {
        arr = mergeSortRec(arr)
    }
    function partition(arr, left, right) {
        let i = left,
            j= right,
            pivot = arr[Math.floor((left+right) / 2)]
        while (i <= j) {
            while (pivot > arr[i]) {
                i++
            }
            while (pivot < arr[j]) {
                j--
            }
            if(i <= j){
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++
                j--
            }
        }
        return i
    }
    function quick(arr, left, right) {
        let index
        if(arr.length > 1){
            index = partition(arr,left,right)
            if(left < index - 1){
                quick(arr,left,index -1)
            }
            if(index < right){
                quick(arr,index,right)
            }
        }
    }
    this.quickSort = function () {
        quick(arr,0,arr.length - 1)
    }
    this.binarySearch = function (item) {
        let low = 0,
            high = arr.length -1,
            mid,
            ele
        while (low <= high) {
            mid = Math.floor((low + high) / 2)
            ele = arr[mid]
            if(ele < item){ //在右边
                low = mid + 1
            }else if(ele > item){ //在左边
                high = mid - 1
            }else {
                return mid
            }
        }
        return -1
    }
}

let arr = createNonSortedArray(5)
console.log(arr.toString())
arr.quickSort()
console.log(arr.toString())
console.log(arr.binarySearch(8))










function createNonSortedArray(size){ //{6}
    let array = new ArrayList()
    // for (let i = size; i> 0; i--){
    //     array.insert(i)
    // }
    array.insert(3)
    array.insert(5)
    array.insert(1)
    array.insert(6)
    array.insert(4)
    array.insert(7)
    array.insert(2)
    return array
}

