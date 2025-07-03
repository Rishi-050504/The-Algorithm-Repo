// /src/pages/Stacks/MinimumStack.jsx
import AlgorithmPage from '/src/components/AlgorithmPage';

export default function MinimumStack() {
  return (
    <AlgorithmPage
      title="Minimum Stack"
      description="A Minimum Stack is a special type of stack that, along with standard operations like push, pop, and top, also supports retrieving the minimum element in constant time using a getMin() function. To achieve this, an auxiliary stack is often used to keep track of the minimum value at each level. When a new element is pushed, the current minimum is also pushed to the min stack. On popping, both stacks are updated. This ensures that the getMin() operation runs in O(1) time, making it efficient for problems requiring frequent minimum lookups alongside normal stack operations."
      javaCode={`
  public class MinStack {
    private int[][] stack;
    private int top;

    public MinStack() {
        stack = new int[1000][2]; // [value, min]
        top = -1;
    }

    public void push(int x) {
        int currentMin = (top == -1) ? x : Math.min(x, stack[top][1]);
        stack[++top][0] = x;
        stack[top][1] = currentMin;
    }

    public void pop() {
        if (top != -1) top--;
    }

    public int top() {
        return (top == -1) ? -1 : stack[top][0];
    }

    public int getMin() {
        return (top == -1) ? -1 : stack[top][1];
    }

    public boolean isEmpty() {
        return top == -1;
    }
}
`}
      cppCode={`
  class MinStack {
    private:
        int topIndex;
        int arr[1000][2]; // first: value, second: min

    public:
        MinStack() {
            topIndex = -1;
        }

        void push(int x) {
            int currentMin = (topIndex == -1) ? x : std::min(x, arr[topIndex][1]);
            arr[++topIndex][0] = x;
            arr[topIndex][1] = currentMin;
        }

        void pop() {
            if (topIndex != -1) topIndex--;
        }

        int top() {
            return (topIndex == -1) ? -1 : arr[topIndex][0];
        }

        int getMin() {
            return (topIndex == -1) ? -1 : arr[topIndex][1];
        }

        bool isEmpty() {
            return topIndex == -1;
        }
};
`}
      sampleInput={`Push: 5 3 7 2
Min
Pop: 2
Min
Top`}
      sampleOutput={`Stack: [5, 3]
Minimum: 3
Top Element: 3`}
      timeComplexity="O(1)"
      spaceComplexity="O(n)"
    />
  );
}
