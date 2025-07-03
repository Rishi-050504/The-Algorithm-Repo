import TopicPage from '/src/components/TopicPage';

const description = `Miscellaneous graph algorithms include flow algorithms, coloring, bipartite checks, and topological sorting.`;

const algorithms = ['Ford Fulkerson', 'Bipartite', 'Topological Sort', 'Graph Coloring'];

export default function Miscellaneous() {
  return (
    <TopicPage
      title="Miscellaneous Graph Algorithms"
      description={description}
      algorithms={algorithms}
      basePath="/topic/graph/miscellaneous"
    />
  );
}
