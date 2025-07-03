import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Deque() {
  return (
    <AlgorithmPage
      title="Deque (Double-Ended Queue)"
      description="A Deque (Double-Ended Queue) is a linear data structure that allows insertion and deletion of elements from both front and rear ends. Unlike a regular queue that supports only FIFO operations, a deque is more flexible and can work as both a queue and a stack. There are two main types: input-restricted deque (insertion at one end only) and output-restricted deque (deletion at one end only). It supports operations like push_front(), push_back(), pop_front(), and pop_back(). Deques are useful in scenarios like sliding window problems, palindrome checking, and implementing advanced data structures like max/min queues."
      javaCode={`
public class ArrayDeque {
    private int[] arr;
    private int front, rear, size, capacity;

    public ArrayDeque(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        front = -1;
        rear = 0;
        size = 0;
    }

    public boolean isFull() {
        return size == capacity;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void insertFront(int val) {
        if (isFull()) {
            System.out.println("Deque is full");
            return;
        }
        front = (front - 1 + capacity) % capacity;
        arr[front] = val;
        size++;
    }

    public void insertRear(int val) {
        if (isFull()) {
            System.out.println("Deque is full");
            return;
        }
        arr[rear] = val;
        rear = (rear + 1) % capacity;
        size++;
    }

    public void deleteFront() {
        if (isEmpty()) {
            System.out.println("Deque is empty");
            return;
        }
        front = (front + 1) % capacity;
        size--;
    }

    public void deleteRear() {
        if (isEmpty()) {
            System.out.println("Deque is empty");
            return;
        }
        rear = (rear - 1 + capacity) % capacity;
        size--;
    }

    public int getFront() {
        if (isEmpty()) throw new RuntimeException("Deque is empty");
        return arr[front];
    }

    public int getRear() {
        if (isEmpty()) throw new RuntimeException("Deque is empty");
        return arr[(rear - 1 + capacity) % capacity];
    }

    public int getSize() {
        return size;
    }

    public void printDeque() {
        if (isEmpty()) {
            System.out.println("Deque is empty");
            return;
        }
        int count = 0;
        int i = front;
        while (count < size) {
            System.out.print(arr[i]);
            if (count < size - 1) System.out.print(" <-> ");
            i = (i + 1) % capacity;
            count++;
        }
        System.out.println();
    }
}
`}
      cppCode={`
class ArrayDeque {
private:
    int* arr;
    int front, rear, size, capacity;

public:
    ArrayDeque(int cap) {
        capacity = cap;
        arr = new int[capacity];
        front = -1;
        rear = 0;
        size = 0;
    }

    bool isFull() {
        return size == capacity;
    }

    bool isEmpty() {
        return size == 0;
    }

    void insertFront(int val) {
        if (isFull()) {
            std::cout << "Deque is full\n";
            return;
        }
        front = (front - 1 + capacity) % capacity;
        arr[front] = val;
        size++;
    }

    void insertRear(int val) {
        if (isFull()) {
            std::cout << "Deque is full\n";
            return;
        }
        arr[rear] = val;
        rear = (rear + 1) % capacity;
        size++;
    }

    void deleteFront() {
        if (isEmpty()) {
            std::cout << "Deque is empty\n";
            return;
        }
        front = (front + 1) % capacity;
        size--;
    }

    void deleteRear() {
        if (isEmpty()) {
            std::cout << "Deque is empty\n";
            return;
        }
        rear = (rear - 1 + capacity) % capacity;
        size--;
    }

    int getFront() {
        if (isEmpty()) throw std::runtime_error("Deque is empty");
        return arr[front];
    }

    int getRear() {
        if (isEmpty()) throw std::runtime_error("Deque is empty");
        return arr[(rear - 1 + capacity) % capacity];
    }

    int getSize() {
        return size;
    }

    void printDeque() {
        if (isEmpty()) {
            std::cout << "Deque is empty\n";
            return;
        }
        int count = 0;
        int i = front;
        while (count < size) {
            std::cout << arr[i];
            if (count < size - 1) std::cout << " <-> ";
            i = (i + 1) % capacity;
            count++;
        }
        std::cout << "\n";
    }

    ~ArrayDeque() {
        delete[] arr;
    }
};
`}
      sampleInput={`InsertRear: 10 20
InsertFront: 5
DeleteRear: 1
InsertRear: 30 40
GetFront
GetRear
Size`}
      sampleOutput={`Deque: 5 <-> 10 <-> 30 <-> 40
Front Element: 5
Rear Element: 40
Size: 4`}
      timeComplexity="O(1) per operation"
      spaceComplexity="O(n)"
    />
  );
}
