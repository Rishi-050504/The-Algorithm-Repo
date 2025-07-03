import TopicPage from '/src/components/TopicPage';

const description = `A tree is a hierarchical data structure composed of nodes connected by edges, with one node designated as the root. Each node contains data and may have zero or more child nodes, forming a parent-child relationship. Trees organize data in a way that reflects a hierarchy, allowing efficient searching, insertion, and deletion. The top node is called the root, nodes with no children are called leaves, and nodes with children are internal nodes..`;

const algorithms = [
  'Traversals and Applications',
  'Types of Trees',
  'Advanced Topics'
];

export default function Trees() {
  return (
    <TopicPage
      title="Trees"
      description={description}
      algorithms={algorithms}
      basePath="/topic/trees"
    />
  );
}
