import TopicPage from '/src/components/TopicPage';

const description = `All Pairs Shortest Paths (APSP) refers to the problem of finding the shortest paths between every pair of vertices in a graph. The goal is to compute the minimum distance from each node to every other node. This is useful in scenarios where quick access to shortest paths between any two points is required. The most common algorithm to solve APSP is Floyd-Warshall, which works on graphs with positive or negative edge weights (but no negative cycles) using dynamic programming.`;

const algorithms = ['Floyd Warshall'];

export default function AllPairsShortestPaths() {
  return (
    <TopicPage
      title="All Pairs Shortest Paths"
      description={description}
      algorithms={algorithms}
      basePath="/topic/graph/all-pairs-shortest-paths"
    />
  );
}
