import TopicPage from '/src/components/TopicPage';

const sortingDescription = `Sorting algorithms are methods used to arrange data in a particular order—typically in ascending or descending order. They play a crucial role in optimizing the performance of other algorithms (like search and merge operations).`;

const sortingAlgorithms = [
  'Bubble Sort',
  'Selection Sort',
  'Insertion Sort',
  'Merge Sort',
  'Quick Sort',
  'Heap Sort',
  'Cyclic Sort'
];

export default function Sorting() {
  return (
    <TopicPage
      title="Sorting"
      description={sortingDescription}
      algorithms={sortingAlgorithms}
      basePath="/topic/sorting"
    />
  );
}
