import TopicPage from '/src/components/TopicPage';

const description = `Array algorithms solve a wide range of problems efficiently by leveraging properties of arrays like continuity, indexing, and frequency counting.`;

const algorithms = [
  "Kadane's Algorithm",
  'Boyer-Moore Majority Vote Algorithm',
  'Dutch National Flag Algorithm',
  'Mo’s Algorithm',
  'Square Root Decomposition',
  'Two Pointer Technique',
  'Minimum Excluded Element (MEX)',
  'Prefix & Suffix Sum'
];

export default function ArrayAlgorithms() {
  return (
    <TopicPage
      title="Array Algorithms"
      description={description}
      algorithms={algorithms}
      basePath="/topic/array-algorithms"
    />
  );
}
