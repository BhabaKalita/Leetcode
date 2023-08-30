class MedianFinder {
    constructor() {
        // Initialize two heaps
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
    }

    addNum(num) {
        // Add the number to the appropriate heap
        if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
            this.maxHeap.insert(num);
        } else {
            this.minHeap.insert(num);
        }

        // Balance the heaps to ensure their sizes differ by at most 1
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.insert(this.maxHeap.extractMax());
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.insert(this.minHeap.extractMin());
        }
    }

    findMedian() {
        // Determine which heap(s) to use based on the number of elements
        const totalSize = this.minHeap.size() + this.maxHeap.size();

        if (totalSize % 2 === 0) {
            // If the total number of elements is even, take the average of the two middle elements
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        } else {
            // If the total number of elements is odd, the middle element is in the maxHeap
            return this.maxHeap.peek();
        }
    }
}

// Helper class for Max Heap
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    extractMax() {
        if (this.isEmpty()) return null;

        const max = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return max;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIdx = this.size() - 1;
        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.heap[currentIdx] <= this.heap[parentIdx]) break;
            [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
            currentIdx = parentIdx;
        }
    }

    heapifyDown() {
        let currentIdx = 0;
        while (true) {
            const leftIdx = 2 * currentIdx + 1;
            const rightIdx = 2 * currentIdx + 2;
            let largestIdx = currentIdx;

            if (leftIdx < this.size() && this.heap[leftIdx] > this.heap[largestIdx]) {
                largestIdx = leftIdx;
            }
            if (rightIdx < this.size() && this.heap[rightIdx] > this.heap[largestIdx]) {
                largestIdx = rightIdx;
            }

            if (largestIdx === currentIdx) break;

            [this.heap[currentIdx], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[currentIdx]];
            currentIdx = largestIdx;
        }
    }
}

// Helper class for Min Heap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) return null;

        const min = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return min;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIdx = this.size() - 1;
        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.heap[currentIdx] >= this.heap[parentIdx]) break;
            [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
            currentIdx = parentIdx;
        }
    }

    heapifyDown() {
        let currentIdx = 0;
        while (true) {
            const leftIdx = 2 * currentIdx + 1;
            const rightIdx = 2 * currentIdx + 2;
            let smallestIdx = currentIdx;

            if (leftIdx < this.size() && this.heap[leftIdx] < this.heap[smallestIdx]) {
                smallestIdx = leftIdx;
            }
            if (rightIdx < this.size() && this.heap[rightIdx] < this.heap[smallestIdx]) {
                smallestIdx = rightIdx;
            }

            if (smallestIdx === currentIdx) break;

            [this.heap[currentIdx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[currentIdx]];
            currentIdx = smallestIdx;
        }
    }
}
