import AlgorithmPage from '/src/components/AlgorithmPage';

export default function MinimumQueue() {
  return (
    <AlgorithmPage
      title="Minimum Queue"
      description="A Minimum Queue is a data structure that allows standard queue operations (enqueue and dequeue) along with efficient retrieval of the minimum element in constant time. It uses a regular queue to store all elements and a double-ended queue (deque) to track potential minimums in increasing order. When enqueuing, it removes all elements from the back of the deque that are larger than the incoming value and adds the new value to both queues. During dequeue, if the removed element is the current minimum (front of deque), it is also removed from the deque. The front of the deque always contains the current minimum, making getMin() operation O(1)."
      javaCode={`
import java.util.*;

public class MinQueue {
    Queue<Integer> main;
    Deque<Integer> min;

    public MinQueue() {
        main = new LinkedList<>();
        min = new ArrayDeque<>();
    }

    public void enqueue(int val) {
        main.offer(val);
        while (!min.isEmpty() && min.peekLast() > val) {
            min.pollLast();
        }
        min.offerLast(val);
    }

    public void dequeue() {
        if (main.isEmpty()) return;
        int removed = main.poll();
        if (removed == min.peekFirst()) {
            min.pollFirst();
        }
    }

    public int getMin() {
        if (min.isEmpty()) throw new RuntimeException("Queue is empty");
        return min.peekFirst();
    }

    public void printQueue() {
        System.out.println("Queue: " + main);
    }
}
`}
      cppCode={`
#include <queue>
#include <deque>
#include <iostream>

class MinQueue {
private:
    std::queue<int> main;
    std::deque<int> min;

public:
    void enqueue(int val) {
        main.push(val);
        while (!min.empty() && min.back() > val) {
            min.pop_back();
        }
        min.push_back(val);
    }

    void dequeue() {
        if (main.empty()) return;
        int removed = main.front();
        main.pop();
        if (!min.empty() && removed == min.front()) {
            min.pop_front();
        }
    }

    int getMin() {
        if (min.empty()) throw std::runtime_error("Queue is empty");
        return min.front();
    }

    void printQueue() {
        std::queue<int> temp = main;
        std::cout << "Queue: ";
        while (!temp.empty()) {
            std::cout << temp.front() << " ";
            temp.pop();
        }
        std::cout << "\n";
    }
};
`}
      sampleInput={`Enqueue: 5 1 3 2
GetMin
Dequeue: 1
GetMin
Enqueue: 0
GetMin`}
      sampleOutput={`Queue: 5 1 3 2
Min: 1
Queue after dequeue: 1 3 2
Min: 1
Queue after enqueue 0: 1 3 2 0
Min: 0`}
      timeComplexity="O(1) per operation (amortized)"
      spaceComplexity="O(n)"
    />
  );
}
