class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return i * 2 + 1; }
    getRightChildIndex(i) { return i * 2 + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);

            if (rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[index] <= this.heap[smallerChildIndex]) break;

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    peek() {
        return this.heap[0] || null;
    }

    size() {
        return this.heap.length;
    }
}


function solution(scoville, K) {
    let minHeap = new MinHeap()
    
    let answer = 0;

   
    scoville.forEach((value) => minHeap.push(value));

    while(minHeap.size() > 0 && minHeap.peek() < K) {
        if (minHeap.size() < 2) return -1
        
        var first = minHeap.pop();
        var second = minHeap.pop();
        var newFood = first + (second * 2);
        
        minHeap.push(newFood);
        answer++
    }

    return answer;
}
