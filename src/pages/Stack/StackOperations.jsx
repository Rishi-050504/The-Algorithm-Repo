// // /src/pages/Stacks/StackOperations.jsx
// import AlgorithmPage from '/src/components/AlgorithmPage';

// export default function StackOperations() {
//   return (
//     <AlgorithmPage
//       title="Stack Operations"
//       description="Stack operations are fundamental actions performed on a stack, which follows the Last In, First Out (LIFO) principle.\n
// Push: Adds an element to the top of the stack.\n
// Pop: Removes the top element from the stack.\n
// Peek/Top: Returns the top element without removing it.\n
// isEmpty: Checks whether the stack is empty.\n
// These operations are usually performed in constant time O(1) and are widely used in expression evaluation, undo mechanisms, recursion handling, and backtracking algorithms."
//       javaCode={`
//   public class Stack {
//     private int[] arr;
//     private int top;
//     private int capacity;

//     public Stack(int size) {
//         arr = new int[size];
//         top = -1;
//         capacity = size;
//     }

//     public void push(int x) {
//         if (isFull()) {
//             System.out.println("Stack Overflow");
//             return;
//         }
//         arr[++top] = x;
//     }

//     public int pop() {
//         if (isEmpty()) {
//             System.out.println("Stack Underflow");
//             return -1;
//         }
//         return arr[top--];
//     }

//     public int peek() {
//         if (isEmpty()) {
//             System.out.println("Stack is Empty");
//             return -1;
//         }
//         return arr[top];
//     }

//     public boolean isEmpty() {
//         return top == -1;
//     }

//     public boolean isFull() {
//         return top == capacity - 1;
//     }

//     public int size() {
//         return top + 1;
//     }
// }
// `}
//       cppCode={`
// class Stack {
//   private:
//       int* arr;
//       int top;
//       int capacity;

//   public:
//       Stack(int size) {
//           arr = new int[size];
//           top = -1;
//           capacity = size;
//       }

//       ~Stack() {
//           delete[] arr;
//       }

//       void push(int x) {
//           if (isFull()) {
//               std::cout << "Stack Overflow\n";
//               return;
//           }
//           arr[++top] = x;
//       }

//       int pop() {
//           if (isEmpty()) {
//               std::cout << "Stack Underflow\n";
//               return -1;
//           }
//           return arr[top--];
//       }

//       int peek() {
//           if (isEmpty()) {
//               std::cout << "Stack is Empty\n";
//               return -1;
//           }
//           return arr[top];
//       }

//       bool isEmpty() {
//           return top == -1;
//       }

//       bool isFull() {
//           return top == capacity - 1;
//       }

//       int size() {
//           return top + 1;
//       }
// };
// `}
//       sampleInput={`Push: 10 20 30
// Peek
// Pop: 1
// Push: 40
// Size
// isEmpty
// Pop: 3
// Pop: 1`}
//       sampleOutput={`Top Element: 30
// Stack: [10, 20, 40]
// Size: 3
// Is Empty: false
// Popped: 40
// Popped: 20
// Popped: 10
// Stack Underflow
// Stack: []`}
//       timeComplexity="O(1)"
//       spaceComplexity="O(n)"
//     />
//   );
// }
// /src/pages/Stacks/StackOperations.jsx
import AlgorithmPage from '/src/components/AlgorithmPage';

export default function StackOperations() {
  return (
    <AlgorithmPage
      title="Stack Operations"
      description={
        <>
          Stack operations are fundamental actions performed on a stack, which follows the Last In, First Out (LIFO) principle.
          <br />
          <strong>Push:</strong> Adds an element to the top of the stack.
          <br />
          <strong>Pop:</strong> Removes the top element from the stack.
          <br />
          <strong>Peek/Top:</strong> Returns the top element without removing it.
          <br />
          <strong>isEmpty:</strong> Checks whether the stack is empty.
          <br />
          These operations are usually performed in constant time O(1) and are widely used in expression evaluation, undo mechanisms, recursion handling, and backtracking algorithms.
        </>
      }
      javaCode={`public class Stack {
    private int[] arr;
    private int top;
    private int capacity;

    public Stack(int size) {
        arr = new int[size];
        top = -1;
        capacity = size;
    }

    public void push(int x) {
        if (isFull()) {
            System.out.println("Stack Overflow");
            return;
        }
        arr[++top] = x;
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return -1;
        }
        return arr[top--];
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack is Empty");
            return -1;
        }
        return arr[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public boolean isFull() {
        return top == capacity - 1;
    }

    public int size() {
        return top + 1;
    }
}`}
      cppCode={`class Stack {
  private:
      int* arr;
      int top;
      int capacity;

  public:
      Stack(int size) {
          arr = new int[size];
          top = -1;
          capacity = size;
      }

      ~Stack() {
          delete[] arr;
      }

      void push(int x) {
          if (isFull()) {
              std::cout << "Stack Overflow\\n";
              return;
          }
          arr[++top] = x;
      }

      int pop() {
          if (isEmpty()) {
              std::cout << "Stack Underflow\\n";
              return -1;
          }
          return arr[top--];
      }

      int peek() {
          if (isEmpty()) {
              std::cout << "Stack is Empty\\n";
              return -1;
          }
          return arr[top];
      }

      bool isEmpty() {
          return top == -1;
      }

      bool isFull() {
          return top == capacity - 1;
      }

      int size() {
          return top + 1;
      }
};`}
      sampleInput={`Push: 10 20 30
Peek
Pop: 1
Push: 40
Size
isEmpty
Pop: 3
Pop: 1`}
      sampleOutput={`Top Element: 30
Stack: [10, 20, 40]
Size: 3
Is Empty: false
Popped: 40
Popped: 20
Popped: 10
Stack Underflow
Stack: []`}
      timeComplexity="O(1)"
      spaceComplexity="O(n)"
    />
  );
}
