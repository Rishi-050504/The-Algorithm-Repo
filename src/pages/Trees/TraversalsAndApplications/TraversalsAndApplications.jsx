import TopicPage from '/src/components/TopicPage';

const description = `Tree traversals are techniques used to visit all nodes in a tree in a specific order. Common traversals include preorder, inorder, and postorder. Trees also support operations to find properties like depth (distance from root to a node), height (longest path from a node to a leaf), number of nodes, as well as minimum and maximum values stored in the tree.`;

const algorithms = [
  'Inorder Traversal',
  'Preorder Traversal',
  'Postorder Traversal',
  'Level Order',
  'Number of Nodes',
  'Height of Tree',
  'Depth of Node',
  'Minimum Value',
  'Maximum Value'
];

export default function TraversalsandApplications() {
  return (
    <TopicPage
      title="Tree Traversals and Applications"
      description={description}
      algorithms={algorithms}
      basePath="/topic/trees/traversals-and-applications"
    />
  );
}
