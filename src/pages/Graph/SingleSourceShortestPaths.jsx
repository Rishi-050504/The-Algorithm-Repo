import TopicPage from '/src/components/TopicPage';

const description = `Single Source Shortest Path (SSSP) refers to the problem of finding the shortest paths from a given source vertex to all other vertices in a weighted graph. The goal is to determine the minimum distance or cost required to reach each vertex from the source. Common algorithms used to solve SSSP include Dijkstra’s Algorithm for graphs with non-negative weights, and Bellman-Ford Algorithm which also handles negative weights.`;

const algorithms = ['Dijkstra', 'Bellman Ford', '0-1 BFS'];

export default function SingleSourceShortestPaths() {
  return (
    <TopicPage
      title="Single Source Shortest Paths"
      description={description}
      algorithms={algorithms}
      basePath="/topic/graph/single-source-shortest-paths"
    />
  );
}
