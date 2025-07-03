import TopicPage from '/src/components/TopicPage';

const description = `Graph representation is how a graph is stored in memory. The two main types are: Adjacency Matrix, which uses a 2D array and is good for dense graphs, and Adjacency List, which stores neighbors for each vertex and is efficient for sparse graphs.`;

const algorithms = ['List', 'Matrix'];

export default function GraphRepresentation() {
  return (
    <TopicPage
      title="Graph Representation"
      description={description}
      algorithms={algorithms}
      basePath="/topic/graph/graph-representation"
    />
  );
}
