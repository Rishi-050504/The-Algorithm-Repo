import TopicPage from '/src/components/TopicPage';

const description = `Graph traversal is the process of visiting all the nodes in a graph in a specific order. It is essential for exploring the structure of a graph, finding paths, checking connectivity, and solving problems like shortest path, cycle detection, and component identification. The two main types of graph traversal are Breadth-First Search (BFS), which explores level by level, and Depth-First Search (DFS), which explores as far as possible along each branch before backtracking.`;

const algorithms = ['BFS', 'DFS', 'FloodFill'];

export default function Traversals() {
  return (
    <TopicPage
      title="Graph Traversals"
      description={description}
      algorithms={algorithms}
      basePath="/topic/graph/graph-traversals"
    />
  );
}
