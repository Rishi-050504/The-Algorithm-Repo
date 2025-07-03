import TopicPage from '/src/components/TopicPage';

const description = `A spanning tree of a connected, undirected graph is a subgraph that includes all the vertices of the graph and is a tree (i.e., it has no cycles and is connected). It connects all the nodes using the minimum possible number of edges, which is exactly (V - 1) for a graph with V vertices. A graph can have multiple spanning trees, and among them, the one with the minimum total edge weight is called a Minimum Spanning Tree (MST).`;

const algorithms = ['Prims', 'Kruskals'];

export default function SpanningTrees() {
  return (
    <TopicPage
      title="Spanning Trees"
      description={description}
      algorithms={algorithms}
      basePath="/topic/graph/spanning-trees"
    />
  );
}
