import TopicPage from '/src/components/TopicPage';

const description = `A cycle in a graph is a path that starts and ends at the same vertex, with all intermediate vertices and edges being distinct. In an undirected graph, a cycle means there is a way to return to a starting point without repeating edges. In a directed graph, the direction of edges must also be followed to form a cycle.`;

const algorithms = ['Cycle Detection', 'Negative Cycle', 'Eulerian Path'];

export default function Cycles() {
  return (
    <TopicPage
      title="Cycles in Graph"
      description={description}
      algorithms={algorithms}
      basePath="/topic/graph/cycles-in-graph"
    />
  );
}
