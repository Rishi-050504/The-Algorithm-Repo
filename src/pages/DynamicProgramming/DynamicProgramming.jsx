import TopicPage from '/src/components/TopicPage';

const description = `Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler overlapping subproblems and storing the results of those subproblems to avoid redundant computations. It is especially useful in optimization problems where recursive solutions would otherwise recompute the same results multiple times. DP typically uses a table (bottom-up) or memoization (top-down) to store intermediate results, leading to significant improvements in efficiency, often reducing exponential time complexities to polynomial.`;

const algorithms = [
  'Linear DP',
  'Knapsack DP',
  'Multi Dimensional DP',
  'Interval DP',
  'Bit DP',
  'Digit DP',
  'DP on Trees',
  'String DP',
  'Graph DP',
  'Classical DP'
];

export default function DynamicProgramming() {
  return (
    <TopicPage
      title="Dynamic Programming"
      description={description}
      algorithms={algorithms}
      basePath="/topic/dynamic-programming"
    />
  );
}
