import AlgorithmPage from '/src/components/AlgorithmPage';

export default function CircularQueue() {
  return (
    <AlgorithmPage
      title="Circular Queue"
      description="A circular queue is a linear data structure that connects the end of the queue back to the front, forming a circle. It efficiently utilizes space by allowing insertion (enqueue) and deletion (dequeue) to wrap around when the end of the array is reached. It uses two pointers: front (to track the first element) and rear (to track the last element). When rear reaches the end of the array and there is space at the beginning (due to dequeued elements), it wraps around to continue inserting. This prevents wastage of space and overcomes the limitation of a simple linear queue where no more elements can be added even if there's unused space at the front."
      javaCode={`
public class CircularQueue {
    private int[] arr;
    private int front, rear, size, capacity;

    public CircularQueue(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    public void enqueue(int val) {
        if (isFull()) {
            System.out.println("Queue is full");
            return;
        }
        rear = (rear + 1) % capacity;
        arr[rear] = val;
        size++;
    }

    public void dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        front = (front + 1) % capacity;
        size--;
    }

    public int peek() {
        if (isEmpty()) throw new RuntimeException("Queue is empty");
        return arr[front];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == capacity;
    }

    public int getSize() {
        return size;
    }

    public void printQueue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        int count = 0, i = front;
        while (count < size) {
            System.out.print(arr[i]);
            if (count < size - 1) System.out.print(" -> ");
            i = (i + 1) % capacity;
            count++;
        }
        System.out.println();
    }
}
`}
      cppCode={`
class CircularQueue {
private:
    int* arr;
    int front, rear, size, capacity;

public:
    CircularQueue(int cap) {
        capacity = cap;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    void enqueue(int val) {
        if (isFull()) {
            std::cout << "Queue is full\n";
            return;
        }
        rear = (rear + 1) % capacity;
        arr[rear] = val;
        size++;
    }

    void dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty\n";
            return;
        }
        front = (front + 1) % capacity;
        size--;
    }

    int peek() {
        if (isEmpty()) throw std::runtime_error("Queue is empty");
        return arr[front];
    }

    bool isEmpty() {
        return size == 0;
    }

    bool isFull() {
        return size == capacity;
    }

    int getSize() {
        return size;
    }

    void printQueue() {
        if (isEmpty()) {
            std::cout << "Queue is empty\n";
            return;
        }
        int count = 0, i = front;
        while (count < size) {
            std::cout << arr[i];
            if (count < size - 1) std::cout << " -> ";
            i = (i + 1) % capacity;
            count++;
        }
        std::cout << "\n";
    }

    ~CircularQueue() {
        delete[] arr;
    }
};
`}
      sampleInput={`Enqueue: 10 20 30
Dequeue: 2
Enqueue: 40 50 60
Peek
Size`}
      sampleOutput={`Queue: 30 -> 40 -> 50 -> 60
Front Element: 30
Size: 4`}
      timeComplexity="O(1) per operation"
      spaceComplexity="O(n)"
    />
  );
}
