import Subsets from '/src/pages/RecursionBacktracking/Subsets';
import Permutations from '/src/pages/RecursionBacktracking/Permutations';
import NQueens from '/src/pages/RecursionBacktracking/NQueens';
import SudokuSolver from '/src/pages/RecursionBacktracking/SudokuSolver';
import CombinationSum from '/src/pages/RecursionBacktracking/CombinationSum';
import RecursionBacktracking from '/src/pages/RecursionBacktracking/RecursionBacktracking';

export const recursionBacktrackingRoutes = [
  { path: '/topic/recursion-backtracking', element: <RecursionBacktracking /> },
  { path: '/topic/recursion-backtracking/subsets', element: <Subsets /> },
  { path: '/topic/recursion-backtracking/permutations', element: <Permutations /> },
  { path: '/topic/recursion-backtracking/n-queens', element: <NQueens /> },
  { path: '/topic/recursion-backtracking/sudoku-solver', element: <SudokuSolver /> },
  { path: '/topic/recursion-backtracking/combination-sum', element: <CombinationSum /> }
];
