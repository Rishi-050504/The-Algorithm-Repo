import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Flood Fill is an algorithm used to determine and fill a connected area in a grid or matrix, starting from a given cell and spreading to adjacent cells that share the same property (like color or value). It works similarly to DFS or BFS by visiting a cell, marking it as visited or filling it, and then recursively or iteratively exploring its neighboring cells (usually in four or eight directions). Flood fill is commonly used in image editing tools (like the paint bucket), solving maze problems, and identifying connected components in grids or matrices.`;

export default function FloodFill() {
  return (
    <AlgorithmPage
      title="Flood Fill"
      description={description}
      javaCode={`
public class FloodFill {

    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int oldColor = image[sr][sc];
        if (oldColor == newColor) return image;
        dfs(image, sr, sc, oldColor, newColor);
        return image;
    }

    private void dfs(int[][] image, int r, int c, int oldColor, int newColor) {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;
        if (image[r][c] != oldColor) return;

        image[r][c] = newColor;

        dfs(image, r + 1, c, oldColor, newColor);
        dfs(image, r - 1, c, oldColor, newColor);
        dfs(image, r, c + 1, oldColor, newColor);
        dfs(image, r, c - 1, oldColor, newColor);
    }
}
`}
      cppCode={`
#include <vector>
using namespace std;

class FloodFill {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        int oldColor = image[sr][sc];
        if (oldColor == newColor) return image;
        dfs(image, sr, sc, oldColor, newColor);
        return image;
    }

private:
    void dfs(vector<vector<int>>& image, int r, int c, int oldColor, int newColor) {
        int rows = image.size();
        int cols = image[0].size();

        if (r < 0 || r >= rows || c < 0 || c >= cols) return;
        if (image[r][c] != oldColor) return;

        image[r][c] = newColor;

        dfs(image, r + 1, c, oldColor, newColor);
        dfs(image, r - 1, c, oldColor, newColor);
        dfs(image, r, c + 1, oldColor, newColor);
        dfs(image, r, c - 1, oldColor, newColor);
    }
};
`}
      sampleInput={`image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
]
start = (1, 1)
newColor = 2`}

      sampleOutput={`[
  [2, 2, 2],
  [2, 2, 0],
  [2, 0, 1]
]`}

      timeComplexity="O(n * m)"
      spaceComplexity="O(n * m)"
    />
  );
}
