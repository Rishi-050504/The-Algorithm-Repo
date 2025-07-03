import TopicPage from '/src/components/TopicPage';

const graphDescription = `A graph is a non-linear data structure that consists of a set of nodes, known as vertices, connected by edges. It is used to represent relationships or connections between entities, such as in social networks, transportation systems, or communication networks. Graphs can be directed or undirected, depending on whether the connections have a direction, and they can also be weighted or unweighted based on whether the edges carry numerical values.`;

const graphSubtopics = [
  'Graph Representation',
  'Graph Traversals',
  'Single Source Shortest Paths',
  'All Pairs Shortest Paths',
  'Spanning Trees',
  'Cycles in Graph',
  'Miscellaneous'
];

export default function Graph() {
  return (
    <TopicPage
      title="Graph"
      description={graphDescription}
      algorithms={graphSubtopics}
      basePath="/topic/graph"
    />
  );
}
