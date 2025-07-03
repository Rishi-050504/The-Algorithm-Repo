import TopicPage from '/src/components/TopicPage';

const description = `Advanced tree topics include powerful techniques and data structures that enable efficient operations over tree-based data.`;

const algorithms = [
  'Segment Tree',
  'Binary Lifting',
  'Disjoint Set Union'
];

export default function AdvancedTopics() {
  return (
    <TopicPage
      title="Advanced Tree Topics"
      description={description}
      algorithms={algorithms}
      basePath="/topic/trees/advanced-topics"
    />
  );
}
