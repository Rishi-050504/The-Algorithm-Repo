import TopicPage from '/src/components/TopicPage';

const description = `Recursion is a technique where a function calls itself to solve smaller parts of a problem, continuing until it reaches a base case. It is useful for problems like tree traversal or factorial calculation. Backtracking builds on recursion by exploring all possible options and undoing choices when a path leads to an invalid solution. It's commonly used in constraint-based problems like N-Queens, Sudoku, or permutations, allowing efficient exploration of solution spaces.`;

const algorithms = ['Subsets', 'Permutations', 'N-Queens', 'Sudoku Solver','Combination Sum'];

export default function RecursionBacktracking() {
  return (
    <TopicPage
      title="Recursion & Backtracking"
      description={description}
      algorithms={algorithms}
      basePath="/topic/recursion-backtracking"
    />
  );
}
