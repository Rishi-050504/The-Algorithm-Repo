import AlgorithmPage from '/src/components/AlgorithmPage';

export default function NQueens() {
  return (
    <AlgorithmPage
      title="N-Queens"
      description="N-Queens is a classic backtracking problem where the goal is to place N queens on an N×N chessboard such that no two queens threaten each other. This means no two queens can be in the same row, column, or diagonal. The solution involves placing one queen per row and recursively trying all columns in the next row, backtracking whenever a placement leads to a conflict. By exploring all valid configurations and undoing invalid ones, the algorithm efficiently finds all possible arrangements using recursion and backtracking techniques."
      javaCode={`public List<List<String>> solveNQueens(int n) {
    List<List<String>> solutions = new ArrayList<>();
    char[][] board = new char[n][n];
    for (char[] row : board)
        Arrays.fill(row, '.');
    backtrack(0, board, solutions);
    return solutions;
}

private void backtrack(int row, char[][] board, List<List<String>> solutions) {
    if (row == board.length) {
        List<String> solution = new ArrayList<>();
        for (char[] r : board)
            solution.add(new String(r));
        solutions.add(solution);
        return;
    }
    for (int col = 0; col < board.length; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 'Q';
            backtrack(row + 1, board, solutions);
            board[row][col] = '.';
        }
    }
}

private boolean isSafe(char[][] board, int row, int col) {
    for (int i = 0; i < row; i++)
        if (board[i][col] == 'Q') return false;
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j] == 'Q') return false;
    for (int i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++)
        if (board[i][j] == 'Q') return false;
    return true;
}`}
      cppCode={`bool isSafe(vector<string>& board, int row, int col, int n) {
    for (int i = 0; i < row; i++)
        if (board[i][col] == 'Q') return false;
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j] == 'Q') return false;
    for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
        if (board[i][j] == 'Q') return false;
    return true;
}

void backtrack(int row, int n, vector<string>& board, vector<vector<string>>& solutions) {
    if (row == n) {
        solutions.push_back(board);
        return;
    }
    for (int col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row][col] = 'Q';
            backtrack(row + 1, n, board, solutions);
            board[row][col] = '.';
        }
    }
}

vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> solutions;
    vector<string> board(n, string(n, '.'));
    backtrack(0, n, board, solutions);
    return solutions;
}`}
      sampleInput={`n = 4`}
      sampleOutput={`[[.Q.., ...Q, Q..., ..Q.], [...Q., Q..., ..Q., .Q..]]`}
      timeComplexity="O(n!)"
      spaceComplexity="O(n^2)"
    />
  );
}
