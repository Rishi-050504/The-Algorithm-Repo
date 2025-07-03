// /src/pages/Stacks/Stack.jsx
import TopicPage from '/src/components/TopicPage';

const stacksDescription = `A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, meaning the last element added is the first one to be removed. It supports two main operations: push (to add an element) and pop (to remove the top element). Other common operations include peek/top (to view the top element without removing it) and isEmpty (to check if the stack is empty). Stacks are used in many applications such as expression evaluation, backtracking, undo functionality, and function call management in recursion. They can be implemented using arrays or linked lists.`;

const stackAlgorithms = [
  'Stack Operations',
  'Monotonic Stack',
  'Minimum Stack'
];

export default function Stack() {
  return (
    <TopicPage
      title="Stacks"
      description={stacksDescription}
      algorithms={stackAlgorithms}
      basePath="/topic/stack"
    />
  );
}
