import AlgorithmPage from '/src/components/AlgorithmPage';

export default function QueueOperations() {
  return (
    <AlgorithmPage
      title="Queue Operations"
      description={
  <>
    Queue operations are fundamental actions performed on a queue which follows the First In First Out (FIFO) principle.<br />
    <strong>Enqueue:</strong> Adds an element to the rear of the queue.<br />
    <strong>Dequeue:</strong> Removes the front element from the queue.<br />
    <strong>Peek/Front:</strong> Returns the front element without removing it.<br />
    <strong>isEmpty:</strong> Checks whether the queue is empty.<br />
    <strong>isFull:</strong> Checks whether the queue is full (in fixed-size queues).<br />
    These operations are widely used in scheduling, buffering, and BFS algorithms.
  </>
}
      javaCode={`
public class ArrayQueue {
    private int[] arr;
    private int front, rear, size, capacity;

    public ArrayQueue(int capacity) {
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
        rear++;
        arr[rear] = val;
        size++;
    }

    public void dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        front++;
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
        return rear == capacity - 1;
    }

    public int size() {
        return size;
    }

    public void printQueue() {
        for (int i = front; i <= rear; i++) {
            System.out.print(arr[i]);
            if (i < rear) System.out.print(" -> ");
        }
        System.out.println();
    }
}
      `}
      cppCode={`
class ArrayQueue {
    private:
        int* arr;
        int front, rear, size, capacity;

    public:
        ArrayQueue(int cap) {
            capacity = cap;
            arr = new int[capacity];
            front = 0;
            rear = -1;
            size = 0;
        }

        void enqueue(int val) {
            if (isFull()) {
                std::cout << "Queue is full\\n";
                return;
            }
            arr[++rear] = val;
            size++;
        }

        void dequeue() {
            if (isEmpty()) {
                std::cout << "Queue is empty\\n";
                return;
            }
            front++;
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
            return rear == capacity - 1;
        }

        int getSize() {
            return size;
        }

        void printQueue() {
            for (int i = front; i <= rear; i++) {
                std::cout << arr[i];
                if (i < rear) std::cout << " -> ";
            }
            std::cout << "\\n";
        }

        ~ArrayQueue() {
            delete[] arr;
        }
};
      `}
      sampleInput={`Enqueue: 10 20 30
Dequeue: 1
Enqueue: 40
Peek
Size`}
      sampleOutput={`Queue: 20 -> 30 -> 40
Front Element: 20
Size: 3`}
      timeComplexity="O(1) per operation"
      spaceComplexity="O(n)"
    />
  );
}
