// /src/pages/Stacks/MonotonicStack.jsx
import AlgorithmPage from '/src/components/AlgorithmPage';

export default function MonotonicStack() {
  return (
    <AlgorithmPage
      title="Monotonic Stack"
      description="A Monotonic Stack is a stack that maintains its elements in either increasing or decreasing order and is useful for efficiently solving problems like finding the next greater or smaller element in an array. It works by iterating through the array and pushing elements onto the stack while ensuring the monotonic property is maintained — elements that break the order are popped off. For example, in a monotonically decreasing stack, if the current element is greater than the top, elements are popped until the order is restored. This avoids unnecessary comparisons and allows many problems to be solved in O(n) time."
      javaCode={`
  public static void monotonicIncreasing(int[] arr, int[] result) {
    int n = arr.length;
    int[] stack = new int[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top != -1 && stack[top] <= arr[i]) {
            top--; // pop
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = arr[i]; // push
    }
  }
  public static void monotonicDecreasing(int[] arr, int[] result) {
    int n = arr.length;
    int[] stack = new int[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top != -1 && stack[top] >= arr[i]) {
            top--; // pop
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = arr[i]; // push
    }
  }

`}
      cppCode={`
  void monotonicIncreasing(int* arr, int n, int* result) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; --i) {
        while (top != -1 && stack[top] <= arr[i]) {
            --top; // pop
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = arr[i]; // push current element
    }
  }
  void monotonicDecreasing(int* arr, int n, int* result) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; --i) {
        while (top != -1 && stack[top] >= arr[i]) {
            --top; // pop
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = arr[i]; // push current element
    }
}

`}
      sampleInput={`arr = [2, 1, 3, 2]`}
      sampleOutput={`Monotonic Increasing (Next Greater): [3, 3, -1, -1]
Monotonic Decreasing (Next Smaller): [1, -1, 2, -1]`}
      timeComplexity="O(n)"
      spaceComplexity="O(n)"
    />
  );
}
