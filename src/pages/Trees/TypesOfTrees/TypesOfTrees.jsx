import TopicPage from '/src/components/TopicPage';

const description = `There are several types of trees, each serving different purposes. These include Binary Trees, Binary Search Trees, Binary Heaps, and Tries, which are used for organizing and managing data efficiently..`;

const algorithms = [
  'Binary Tree',
  'Binary Search Tree',
  'Binary Heap',
  'Trie'
];

export default function TypesOfTrees() {
  return (
    <TopicPage
      title="Types of Trees"
      description={description}
      algorithms={algorithms}
      basePath="/topic/trees/types-of-trees"
    />
  );
}
