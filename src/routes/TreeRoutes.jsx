import Trees from '/src/pages/Trees/Trees';

import TraversalsAndApplications from '/src/pages/Trees/TraversalsAndApplications/TraversalsAndApplications';
import Inorder from '/src/pages/Trees/TraversalsAndApplications/Inorder';
import Preorder from '/src/pages/Trees/TraversalsAndApplications/Preorder';
import Postorder from '/src/pages/Trees/TraversalsAndApplications/Postorder';
import Height from '/src/pages/Trees/TraversalsAndApplications/Height';
import Depth from '/src/pages/Trees/TraversalsAndApplications/Depth';
import MaxValue from '/src/pages/Trees/TraversalsAndApplications/MaxValue';
import MinValue from '/src/pages/Trees/TraversalsAndApplications/MinValue';
import LevelOrder from '/src/pages/Trees/TraversalsAndApplications/LevelOrder';
import NumberOfNodes from '/src/pages/Trees/TraversalsAndApplications/NumberOfNodes';

import TypesOfTrees from '/src/pages/Trees/TypesOfTrees/TypesOfTrees';
import BinaryTree from '/src/pages/Trees/TypesOfTrees/BinaryTree';
import BinarySearchTree from '/src/pages/Trees/TypesOfTrees/BinarySearchTree';
import Heap from '/src/pages/Trees/TypesOfTrees/Heap';
import Trie from '/src/pages/Trees/TypesOfTrees/Trie';

import AdvancedTopics from '/src/pages/Trees/AdvancedTopics/AdvancedTopics';
import SegmentTree from '/src/pages/Trees/AdvancedTopics/SegmentTree';
import BinaryLifting from '/src/pages/Trees/AdvancedTopics/BinaryLifting';
import DisjointSetUnion from '/src/pages/Trees/AdvancedTopics/DisjointSetUnion';

export const treeRoutes = [
  { path: '/topic/trees', element: <Trees /> },

  { path: '/topic/trees/traversals-and-applications', element: <TraversalsAndApplications /> },
  { path: '/topic/trees/traversals-and-applications/inorder-traversal', element: <Inorder /> },
  { path: '/topic/trees/traversals-and-applications/preorder-traversal', element: <Preorder /> },
  { path: '/topic/trees/traversals-and-applications/postorder-traversal', element: <Postorder /> },
  { path: '/topic/trees/traversals-and-applications/height-of-tree', element: <Height /> },
  { path: '/topic/trees/traversals-and-applications/depth-of-node', element: <Depth /> },
  { path: '/topic/trees/traversals-and-applications/maximum-value', element: <MaxValue /> },
  { path: '/topic/trees/traversals-and-applications/minimum-value', element: <MinValue /> },
  { path: '/topic/trees/traversals-and-applications/level-order', element: <LevelOrder /> },
  { path: '/topic/trees/traversals-and-applications/number-of-nodes', element: <NumberOfNodes /> },

  { path: '/topic/trees/types-of-trees', element: <TypesOfTrees /> },
  { path: '/topic/trees/types-of-trees/binary-tree', element: <BinaryTree /> },
  { path: '/topic/trees/types-of-trees/binary-search-tree', element: <BinarySearchTree /> },
  { path: '/topic/trees/types-of-trees/binary-heap', element: <Heap /> },
  { path: '/topic/trees/types-of-trees/trie', element: <Trie /> },

  { path: '/topic/trees/advanced-topics', element: <AdvancedTopics /> },
  { path: '/topic/trees/advanced-topics/segment-tree', element: <SegmentTree /> },
  { path: '/topic/trees/advanced-topics/binary-lifting', element: <BinaryLifting /> },
  { path: '/topic/trees/advanced-topics/disjoint-set-union', element: <DisjointSetUnion /> }
];
