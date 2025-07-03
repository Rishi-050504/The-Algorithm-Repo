import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Heap() {
  return (
    <AlgorithmPage
      title="Binary Heap"
      description="A Min Heap is a complete binary tree where the value of each node is less than or equal to the values of its children, ensuring the minimum element is always at the root. Insertion adds the new element at the end and then “heapifies up” by swapping it with its parent until the heap property is restored. Deletion removes the root (minimum), replaces it with the last element, and then “heapifies down” by swapping it with the smaller of its children until the heap property is maintained. Updating a value adjusts the heap by either heapifying up or down depending on whether the new value is smaller or larger than the old one. This structure efficiently supports quick access, insertion, and deletion of the minimum element.."
      javaCode={`
import java.util.*;

public class MinHeap {
    private List<Integer> heap = new ArrayList<>();

    // Insert element
    public void insert(int val) {
        heap.add(val);
        heapifyUp(heap.size() - 1);
    }

    // Get min (root)
    public int getMin() {
        return heap.isEmpty() ? -1 : heap.get(0);
    }

    // Delete min (root)
    public int deleteMin() {
        if (heap.isEmpty()) return -1;

        int min = heap.get(0);
        int last = heap.remove(heap.size() - 1);
        if (!heap.isEmpty()) {
            heap.set(0, last);
            heapifyDown(0);
        }
        return min;
    }

    // Update value at index
    public void update(int index, int newVal) {
        if (index < 0 || index >= heap.size()) return;
        int oldVal = heap.get(index);
        heap.set(index, newVal);
        if (newVal < oldVal)
            heapifyUp(index);
        else
            heapifyDown(index);
    }

    private void heapifyUp(int i) {
        while (i > 0 && heap.get(i) < heap.get(parent(i))) {
            swap(i, parent(i));
            i = parent(i);
        }
    }

    private void heapifyDown(int i) {
        int left = left(i), right = right(i), smallest = i;
        if (left < heap.size() && heap.get(left) < heap.get(smallest)) smallest = left;
        if (right < heap.size() && heap.get(right) < heap.get(smallest)) smallest = right;
        if (smallest != i) {
            swap(i, smallest);
            heapifyDown(smallest);
        }
    }

    private int parent(int i) { return (i - 1) / 2; }
    private int left(int i) { return 2 * i + 1; }
    private int right(int i) { return 2 * i + 2; }

    private void swap(int i, int j) {
        int tmp = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, tmp);
    }

    public void printHeap() {
        System.out.println(heap);
    }
}
`}
      cppCode={`
#include <iostream>
#include <vector>
using namespace std;

class MinHeap {
    vector<int> heap;

public:
    void insert(int val) {
        heap.push_back(val);
        heapifyUp(heap.size() - 1);
    }

    int getMin() {
        return heap.empty() ? -1 : heap[0];
    }

    int deleteMin() {
        if (heap.empty()) return -1;

        int min = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        heapifyDown(0);
        return min;
    }

    void update(int index, int newVal) {
        if (index < 0 || index >= heap.size()) return;
        int oldVal = heap[index];
        heap[index] = newVal;
        if (newVal < oldVal)
            heapifyUp(index);
        else
            heapifyDown(index);
    }

    void printHeap() {
        for (int val : heap) cout << val << " ";
        cout << endl;
    }

private:
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return 2 * i + 1; }
    int right(int i) { return 2 * i + 2; }

    void heapifyUp(int i) {
        while (i > 0 && heap[i] < heap[parent(i)]) {
            swap(heap[i], heap[parent(i)]);
            i = parent(i);
        }
    }

    void heapifyDown(int i) {
        int l = left(i), r = right(i), smallest = i;
        if (l < heap.size() && heap[l] < heap[smallest]) smallest = l;
        if (r < heap.size() && heap[r] < heap[smallest]) smallest = r;
        if (smallest != i) {
            swap(heap[i], heap[smallest]);
            heapifyDown(smallest);
        }
    }
};
`}
      sampleInput={`Insert: 5 3 8 1 6
Print
Get Min
Update index 2 → 0
Print
Delete Min
Print
`}
      sampleOutput={`Heap after insertion: [1, 3, 8, 5, 6]
Minimum Element: 1
Heap after update:   [0, 3, 1, 5, 6]
Heap after deleteMin: [1, 3, 6, 5]`}
      timeComplexity="O(log n)"
      spaceComplexity="O(n)"
    />
  );
}
